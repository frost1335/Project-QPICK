import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteProducts } from "../../actions";
import { Card, Loader } from "../../components";

import "./FavoriteView.scss";

const FavoriteView = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="FavoriteView">
        <h2>Избранное</h2>
        <div className="favorite_body">
          <div className="favorite_category">
            {favorites.length ? (
              favorites.map((pdct, idx) => <Card product={pdct} key={idx} />)
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteView;
