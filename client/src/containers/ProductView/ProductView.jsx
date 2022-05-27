import Rating from "@material-ui/lab/Rating";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSimilarProducts } from "../../actions";
import { BuyModal, Loader } from "../../components";

import "./ProductView.scss";

const ProductView = () => {
  window.scroll({ top: 0 });
  const { id } = useParams();
  const param = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.find((p) => p._id === id)
  );
  const categorys = useSelector((state) => state.categories);
  const shops = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getSimilarProducts(id));
  }, [dispatch, id]);

  const favoriteHandler = () => {
    localStorage.setItem(`${id}-favorite`, id);
    document.querySelector(".favorite_tool").classList.add("show");
    setTimeout(() => {
      document.querySelector(".favorite_tool").classList.remove("show");
    }, 2000);
  };

  const cartHandler = () => {
    localStorage.setItem(`${id}-cart`, `${id},1`);
    document.querySelector(".cart_tool").classList.add("show");
    setTimeout(() => {
      document.querySelector(".cart_tool").classList.remove("show");
    }, 2000);
  };

  let category;
  let shop;

  if (shops.length && product) {
    shop = shops.filter(
      (shop) => shop._id.toString() === product.shopID.toString()
    )[0];
  }

  if (categorys.length && product) {
    category = categorys.filter(
      (ctg) => ctg._id.toString() === product.categoryID.toString()
    )[0];
  }

  return (
    <div className="container">
      {param.pdID ? <BuyModal products={product} id={param.pdID} /> : null}
      {product && shop && category ? (
        <div className="ProductView">
          <div className="view_nav">
            <Link to="/api/" className="first_link">
              Назад
            </Link>
            <ul>
              <li>
                <Link to={"/"}>Главная</Link>
              </li>
              /
              <li>
                <Link to={"/shop/view/" + shop._id}>{shop.name}</Link>
              </li>
              /
              <li>
                <Link to={"/category/view/" + category._id}>
                  {category.name}
                </Link>
              </li>
            </ul>
          </div>
          <div className="view_header">
            <h2>{product.title}</h2>
            <h4>
              <span className="rating">
                <Rating
                  name="size-large"
                  value={3.5}
                  size="large"
                  precision={0.5}
                  readOnly
                />
                <span className="rating_num">({product.rating})</span>
              </span>
              <span className="rating_count"> отзыв</span>
            </h4>
          </div>
          <div className="view_body">
            <div className="body_left">
              <div className="left_img">
                <img src={product.img[0].large.path} alt="img-product" />
              </div>
            </div>
            <div className="body_right">
              <h2>
                {product.price} <span>сум</span>
              </h2>
              <h4>Коротко о товаре:</h4>
              <p>{product.description}</p>
              <div className="buy_button">
                <button className="korzina" onClick={cartHandler}>
                  В корзину
                  <div className="cart_tool">Added to cart</div>
                </button>
                <button className="favorite" onClick={favoriteHandler}>
                  В избранное
                  <div className="favorite_tool">Added to favorite</div>
                </button>
                <Link
                  className="buy"
                  to={`/view/product/${product._id}/buy/${product._id}`}
                >
                  Купить
                </Link>
              </div>
            </div>
            <div className="body_bottom">
              <div className="shop_info">
                <span>Магазин: </span>
                <Link to={"/shop/" + shop._id}>
                  <img src={shop.img[0].thumbnail.path} alt={"shop-img"} />
                  <p>{shop.name}</p>
                </Link>
              </div>
              <div className="category_info">
                <span>Категория: </span>
                <Link to={"/category/" + category._id}>
                  <img
                    src={category.img[0].thumbnail.path}
                    alt={"category-img"}
                  />
                  <p>{category.name}</p>
                </Link>
              </div>
              <div className="tags">
                <h4>Теги: </h4>
                <p>
                  {product.tags.map((tag, idx) => (
                    <span key={idx}> {tag}, </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductView;
