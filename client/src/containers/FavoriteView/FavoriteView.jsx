import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Loader } from "../../components";

import "./FavoriteView.scss";
import { getFavoriteProducts } from "../../actions/favorite";

const FavoriteView = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="FavoriteView">
        <h2>Избранное</h2>
        <div className="favorite_body">
          {favorites.length ? (
            favorites.map((ctg, idx) => (
              <div className="favorite_category" key={idx}>
                <h3>{ctg.name}</h3>
                <div className="category_body">
                  {ctg.products.map((pdct, index) => (
                    <Card category={ctg} product={pdct} key={index} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteView;
