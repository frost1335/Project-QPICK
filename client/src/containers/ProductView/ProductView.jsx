import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../actions/productID";
import { getSimilarProducts } from "../../actions/similarProducts";
import { Loader } from "../../components";

import "./ProductView.scss";

const ProductView = () => {
  window.scroll({ top: 0 });
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.productID);
  const categorys = useSelector((state) => state.categories);
  const shops = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getProductById(id));
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
    localStorage.setItem(`${id}-cart`, id);
    document.querySelector(".cart_tool").classList.add("show");
    setTimeout(() => {
      document.querySelector(".cart_tool").classList.remove("show");
    }, 2000);
  };

  let category;
  let shop;

  if (shops.data && product.data) {
    shop = shops.data.filter(
      (shop) => shop._id.toString() === product.data.shopID.toString()
    )[0];
  }

  if (categorys.data && product.data) {
    category = categorys.data.filter(
      (ctg) => ctg._id.toString() === product.data.categoryID.toString()
    )[0];
  }

  return (
    <div className="container">
      {product.data && shop && category ? (
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
            <h2>{product.data.title}</h2>
            <h4>
              <span className="rating">
                <span className="rating_star">
                  <ul data-v-d945bb9e="" className="flex">
                    <li className="mr-1">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                          fill="#C1C1C1"
                        ></path>
                      </svg>
                    </li>
                    <li className="mr-1">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                          fill="#C1C1C1"
                        ></path>
                      </svg>
                    </li>
                    <li className="mr-1">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                          fill="#C1C1C1"
                        ></path>
                      </svg>
                    </li>
                    <li className="mr-1">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                          fill="#C1C1C1"
                        ></path>
                      </svg>
                    </li>
                    <li className="mr-1">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                          fill="#C1C1C1"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </span>
                <span className="rating_num">(0.0)</span>
              </span>
              <span className="rating_count"> 0 отзывов</span>
            </h4>
          </div>
          <div className="view_body">
            <div className="body_left">
              <div className="left_img">
                <img src={product.data.img} alt="img-product" />
              </div>
            </div>
            <div className="body_right">
              <h2>
                {product.data.price} <span>сум</span>
              </h2>
              <h4>Коротко о товаре:</h4>
              <p>{product.data.description}</p>
              <div className="buy_button">
                <button className="korzina" onClick={cartHandler}>
                  В корзину
                  <div className="cart_tool">Added to cart</div>
                </button>
                <button className="favorite" onClick={favoriteHandler}>
                  В избранное
                  <div className="favorite_tool">Added to favorite</div>
                </button>
                <button className="buy">Купить</button>
              </div>
            </div>
            <div className="body_bottom">
              <div className="shop_info">
                <span>Магазин: </span>
                <Link to={"/shop/view/" + shop._id}>
                  <img src={shop.img} alt={shop.img} />
                  <p>{shop.name}</p>
                </Link>
              </div>
              <div className="category_info">
                <span>Категория: </span>
                <Link to={"/category/view/" + category._id}>
                  <img src={category.img} alt={category.img} />
                  <p>{category.name}</p>
                </Link>
              </div>
              <div className="tags">
                <h4>Теги: </h4>
                <p>
                  {product.data.tags.map((tag, idx) => (
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
