import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useParams } from "react-router-dom";

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
  AdminControl,
  AdminForm,
  BannerControl,
  BannerForm,
  BrandControl,
  BrandForm,
  CategoryControl,
  CategoryForm,
  ProductControl,
  ProductForm,
  ShopControl,
  ShopForm,
  SliderControl,
  SliderForm,
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
        {/* User routes */}
        <Route path="/" element={<Main />} />
        <Route path="/view/product/:id" element={<Product />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy/:id" element={<Main />} />
        <Route path="/admin/auth" element={<Auth />} />
        <Route path="/admin/control" element={<Admin />} />

        {/* Product creators routes */}
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

        {/* Category creators routes */}
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

        {/* Shop creators routes */}
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

        {/* Brand creators routes */}
        <Route
          path="/admin/brand/control"
          element={
            <Admin>
              <BrandControl />
            </Admin>
          }
        />
        <Route
          path="/admin/brand/create"
          element={
            <Admin>
              <BrandForm />
            </Admin>
          }
        />
        <Route
          path="/admin/brand/edit/:id"
          element={
            <Admin>
              <BrandForm />
            </Admin>
          }
        />

        {/* Admin creators routes */}
        <Route
          path="/admin/admin/control"
          element={
            <Admin>
              <AdminControl />
            </Admin>
          }
        />
        <Route
          path="/admin/admin/create"
          element={
            <Admin>
              <AdminForm />
            </Admin>
          }
        />
        <Route
          path="/admin/admin/edit/:id"
          element={
            <Admin>
              <AdminForm />
            </Admin>
          }
        />

        {/* Slider creators routes */}
        <Route
          path="/admin/slider/control"
          element={
            <Admin>
              <SliderControl />
            </Admin>
          }
        />
        <Route
          path="/admin/slider/create"
          element={
            <Admin>
              <SliderForm />
            </Admin>
          }
        />
        <Route
          path="/admin/slider/edit/:id"
          element={
            <Admin>
              <SliderForm />
            </Admin>
          }
        />

        {/* Slider creators routes */}
        <Route
          path="/admin/banner/control"
          element={
            <Admin>
              <BannerControl />
            </Admin>
          }
        />
        <Route
          path="/admin/banner/create"
          element={
            <Admin>
              <BannerForm />
            </Admin>
          }
        />
        <Route
          path="/admin/banner/edit/:id"
          element={
            <Admin>
              <BannerForm />
            </Admin>
          }
        />

        {/* Slider creators routes */}

        {/* Not found page route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
