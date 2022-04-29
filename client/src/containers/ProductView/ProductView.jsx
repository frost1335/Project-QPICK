import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tshirt } from "../../images";

import "./ProductView.scss";

const ProductView = () => {
  return (
    <div className="container">
      <div className="ProductView">
        <div className="view_nav">
          <Link to="/api/" className="first_link">
            Назад
          </Link>
          <ul>
            <li>
              <Link to={"/api/"}>Главная</Link>
            </li>
            /
            <li>
              <Link to={"/api/"}>Shop</Link>
            </li>
            /
            <li>
              <Link to={"/api/"}>Category</Link>
            </li>
          </ul>
        </div>
        <div className="view_header">
          <h2>Product name</h2>
          <h4>
            <span className="rating">
              <span className="rating_star">
                <ul data-v-d945bb9e="" class="flex">
                  <li class="mr-1">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                        fill="#C1C1C1"
                      ></path>
                    </svg>
                  </li>
                  <li class="mr-1">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                        fill="#C1C1C1"
                      ></path>
                    </svg>
                  </li>
                  <li class="mr-1">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                        fill="#C1C1C1"
                      ></path>
                    </svg>
                  </li>
                  <li class="mr-1">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.23119 1.0425C9.34139 0.820095 9.65861 0.820095 9.76881 1.0425L12.3656 6.28329C12.4094 6.37159 12.4937 6.43277 12.5912 6.44696L18.397 7.29232C18.6433 7.32819 18.7413 7.63115 18.5626 7.80449L14.3636 11.8787C14.2925 11.9477 14.26 12.0473 14.2769 12.1449L15.268 17.9016C15.3101 18.1465 15.0533 18.3335 14.8331 18.2182L9.63922 15.4972C9.55203 15.4515 9.44797 15.4515 9.36078 15.4972L4.1669 18.2182C3.94674 18.3335 3.68986 18.1465 3.73203 17.9016L4.72314 12.1449C4.73995 12.0473 4.70749 11.9477 4.6364 11.8787L0.437366 7.80449C0.258712 7.63115 0.356718 7.32819 0.603049 7.29232L6.40878 6.44696C6.50629 6.43277 6.59062 6.37159 6.63437 6.28329L9.23119 1.0425Z"
                        fill="#C1C1C1"
                      ></path>
                    </svg>
                  </li>
                  <li class="mr-1">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
              <img src="1234" alt="img-product" />
            </div>
          </div>
          <div className="body_right">
            <h2>
              2343434 <span>сум</span>
            </h2>
            <h4>Коротко о товаре:</h4>
            <p>
              Вы можете купить Tecno Mobile Camon 18P Керамический белый с
              быстрой доставкой и с официальной гарантией в регион сразу или в
              рассрочку. У нас купить Tecno Mobile Camon 18P Керамический белый
              в рассрочку очень быстро и легко. Зачем купить Tecno Mobile Camon
              18P Керамический белый в кредит если в онлайне более удобно и
              дешево. Быстрая доставка по Узбекистану
            </p>
            <div className="buy_button">
              <Link className="korzina" to="/api/korzina">
                В корзину
              </Link>
              <Link className="favorite" to="/api/korzina">
                В избранное
              </Link>
              <Link className="buy" to="/api/korzina">
                Купить
              </Link>
            </div>
          </div>
          <div className="body_bottom">
            <div className="shop_info">
              <span>Магазин: </span>
              <Link to="/api/shopID">
                <img src={Tshirt} alt="asdasd" />
                <p>Shop name</p>
              </Link>
            </div>
            <div className="category_info">
              <span>Категория: </span>
              <Link to="/api/categoryID">
                <img src={Tshirt} alt="asdasd" />
                <p>Category name</p>
              </Link>
            </div>
            <div className="tags">
              <h4>Теги: </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                ullam rerum est maiores modi sunt quod tempora esse eligendi,
                ipsum dolores perferendis et labore dolor reiciendis quasi
                expedita. Voluptates necessitatibus repellat dolorem, quia
                eligendi architecto?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
