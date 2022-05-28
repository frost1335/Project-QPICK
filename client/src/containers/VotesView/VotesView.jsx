import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBuys } from "../../actions";
import VoteCard from "./VoteCard/VoteCard";

import "./VotesView.scss";

const VotesView = () => {
  const dispatch = useDispatch();
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    dispatch(getBuys());
  }, [dispatch]);

  const buys = useSelector((state) =>
    state.buys.filter(
      (b) =>
        b.status === "phoned" &&
        b._id.toString() === localStorage.getItem(`${b._id}-buy`)
    )
  );

  useEffect(() => {
    if (buys.length) {
      let arr = [];

      let by = [...buys];

      by.map((b) => {
        b.products.map((p) => {
          return arr.push({ id: `${p}-${b._id}`, value: 0 });
        });
        return b;
      });

      setVotes(arr);
    }
  }, []);

  const voteProduct = (id, buyId, value) => {
    let votes = [...votes];
    let vote = votes.find((v) => v.id === `${id}-${buyId}`);
    vote.value = value;
    votes.map((v) => (v.id === vote.id ? vote : v));
    setVotes(votes);
  };

  return (
    <div className="container">
      <div className="VotesView">
        <h3>Оцените продуктов</h3>
        <div className="votes_menu">
          {buys.length
            ? buys.map((b, idx) => (
                <VoteCard
                  key={idx}
                  b={b}
                  voteProduct={voteProduct}
                  votes={votes}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default VotesView;
