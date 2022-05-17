import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import {
  getProducts,
  getCategories,
  getAllBrands,
  getAllShops,
  getAllProducts,
  getFavoriteProducts,
  getCartProducts,
} from "./actions";

import { Main, NotFound, Product, Favorite, Cart, Auth, Admin } from "./pages";
import {
  CategoryControl,
  CategoryForm,
  ProductControl,
  ProductForm,
  ShopControl,
  ShopForm,
} from "./containers";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllBrands());
    dispatch(getAllShops());
    dispatch(getAllProducts());
    dispatch(getProducts());
    dispatch(getFavoriteProducts());
    dispatch(getCartProducts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view/product/:id" element={<Product />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/auth" element={<Auth />} />
        <Route path="/admin/control" element={<Admin />} />
        <Route
          path="/admin/product/control"
          element={
            <Admin>
              <ProductControl />
            </Admin>
          }
        />
        <Route
          path="/admin/product/create"
          element={
            <Admin>
              <ProductForm />
            </Admin>
          }
        />
        <Route
          path="/admin/product/edit/:id"
          element={
            <Admin>
              <ProductForm />
            </Admin>
          }
        />
        <Route
          path="/admin/category/control"
          element={
            <Admin>
              <CategoryControl />
            </Admin>
          }
        />
        <Route
          path="/admin/category/create"
          element={
            <Admin>
              <CategoryForm />
            </Admin>
          }
        />
        <Route
          path="/admin/category/edit/:id"
          element={
            <Admin>
              <CategoryForm />
            </Admin>
          }
        />
        <Route
          path="/admin/shop/control"
          element={
            <Admin>
              <ShopControl />
            </Admin>
          }
        />
        <Route
          path="/admin/shop/create"
          element={
            <Admin>
              <ShopForm />
            </Admin>
          }
        />
        <Route
          path="/admin/shop/edit/:id"
          element={
            <Admin>
              <ShopForm />
            </Admin>
          }
        />
        <Route path="/admin/" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
