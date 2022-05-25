import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBuys } from "../../actions";
import { RangeSlider } from "../../components";

const VotesView = () => {
  const dispatch = useDispatch();

  const buys = useSelector((state) =>
    state.buys.filter(
      (b) =>
        b.status === "phoned" &&
        b._id.toString() === localStorage.getItem(`${b._id}-buy`)
    )
  );

  useEffect(() => {
    dispatch(getBuys());
  }, [dispatch]);

  console.log(buys);

  return (
    <div className="container">
      <div className="VotesView">
        <h3>Оцените продуктов</h3>
        <div className="votes_menu">
          {buys.length
            ? buys.map((b, idx) => (
                <div className="vote_item" key={idx}>
                  {b.products.map((p, i) => (
                    <div className="item_products">
                      <div className="product">
                        <div className="pdct_img">
                          <img
                            src={p.img[0].thumbnail.path}
                            alt="product-img"
                          />
                        </div>
                        <span>{p.title}</span>
                        <span>{p.category}</span>
                        <span>{p.shop}</span>
                      </div>

                      <div className="product_form">
                        <RangeSlider />
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default VotesView;
