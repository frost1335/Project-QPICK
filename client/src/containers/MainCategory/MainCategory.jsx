import React, { useEffect, useState } from "react";

import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";

import "./MainCategory.scss";

import { Card, Loader } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  loader: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    marginBottom: "1rem",
    padding: "13px",
  },
  filters: {
    padding: "0 1.5rem",
  },
  priceRangeInputs: {
    display: "flex",
    justifyContent: "space-between",
  },
  selects: {
    display: "flex",
    justifyContent: "space-between",
    div: {
      width: "100%",
    },
  },
});

const MainCategory = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const params = location.search ? location.search : null;

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sliderMax, setSliderMax] = useState(450000);
  const [priceRange, setPriceRange] = useState([35000, 145000]);
  const [priceOrder, setPriceOrder] = useState("descending");

  const [productShop, setProductShop] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const [shopSorting, setShopSorting] = useState();
  const [categorySorting, setCategorySorting] = useState();

  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState("");

  const shops = useSelector((state) => state.shops);
  const categories = useSelector((state) => state.categories);

  const updateUIValues = (uiValues) => {
    setSliderMax(uiValues.maxPrice);

    if (uiValues.filtering.price) {
      let priceFilter = uiValues.filtering.price;

      setPriceRange([Number(priceFilter.gte), Number(priceFilter.lte)]);
    }

    if (uiValues.sorting.price) {
      let priceSort = uiValues.sorting.price;

      setPriceOrder(priceSort);
    }
  };

  // Side effects
  useEffect(() => {
    let cancel;

    const fetchData = async () => {
      setLoading(true);
      try {
        let query;

        if (params && !filter) {
          query = params;
        } else {
          query = filter;
        }

        console.log(sorting);

        if (sorting) {
          if (query.length === 0) {
            query = `?sort=${sorting}`;
          } else {
            query = query + "&sort=" + sorting;
          }
        }

        if (productShop) {
          if (query.length === 0) {
            query = `?shop=${productShop}`;
          } else {
            query = query + "&shop=" + productShop;
          }
        }

        if (productCategory) {
          if (query.length === 0) {
            query = `?category=${productCategory}`;
          } else {
            query = query + "&category=" + productCategory;
          }
        }

        const { data } = await axios({
          method: "GET",
          url: `/api/product${query}`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setProducts(data.data);
        setFilterProducts(data.data);
        setLoading(false);
        updateUIValues(data.uiValues);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.message);
      }
    };

    fetchData();

    return () => cancel();
  }, [params, sorting, filter]);

  const handlePriceInputChange = (e, type) => {
    let newRange;

    if (type === "lower") {
      newRange = [...priceRange];
      newRange[0] = Number(e.target.value);

      setPriceRange(newRange);
    }

    if (type === "upper") {
      newRange = [...priceRange];
      newRange[1] = Number(e.target.value);

      setPriceRange(newRange);
    }
  };

  const onSliderCommitHandler = (e, newValue) => {
    buildRangeFilter(newValue);
  };

  const onTextfieldCommitHandler = () => {
    buildRangeFilter(priceRange);
  };

  const onSelectHandler = (e, type) => {
    if (type === "shop") {
      console.log(filterProducts);
      let product = [...filterProducts];

      let filteredProducts = product.filter((p) => p.shopID === e.target.value);

      setProducts(filteredProducts);
    } else {
      let product = [...filterProducts];

      let filteredProducts = product.filter(
        (p) => p.categoryID.toString() !== e.target.value.toString()
      );

      setProducts(filteredProducts);
    }
  };

  console.log(products);

  const buildRangeFilter = (newValue) => {
    const urlFilter = `?price[gte]=${newValue[0]}&price[lte]=${newValue[1]}`;

    setFilter(urlFilter);

    navigate(urlFilter);
  };

  const handleSortChange = (e) => {
    setPriceOrder(e.target.value);

    if (e.target.value === "ascending") {
      setSorting("price");
    } else if (e.target.value === "descending") {
      setSorting("-price");
    }
  };

  const clearAllFilters = (e) => {
    setFilter("");
    setSorting("");
    setPriceRange([0, sliderMax]);
    navigate("/");
  };

  console.log(productCategory, productShop);

  return (
    <div className="container">
      <div className="MainCategory">
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography gutterBottom style={{ marginBottom: 38 }}>
                Filters
              </Typography>

              <div className={classes.selects}>
                <Select
                  label="Shop"
                  value={productShop}
                  disabled={loading}
                  variant="outlined"
                  id="shop"
                  size="small"
                  onChange={(e) => setProductShop(e.target.value)}
                  onBlur={(e) => onSelectHandler(e, "shop")}
                >
                  {shops.length
                    ? shops.map((sh, i) => (
                        <MenuItem key={i} value={sh._id}>
                          {sh.name}
                        </MenuItem>
                      ))
                    : null}
                </Select>
                <Select
                  label="Category"
                  value={productCategory}
                  disabled={loading}
                  variant="outlined"
                  id="category"
                  size="small"
                  onChange={(e) => setProductCategory(e.target.value)}
                  onBlur={(e) => onSelectHandler(e, "category")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categories.length
                    ? categories.map((c, i) => (
                        <MenuItem key={i} value={c._id}>
                          {c.name}
                        </MenuItem>
                      ))
                    : null}
                </Select>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography gutterBottom>Filters</Typography>

              <div className={classes.filters}>
                <Slider
                  min={0}
                  max={sliderMax}
                  value={priceRange}
                  valueLabelDisplay="auto"
                  disabled={loading}
                  onChange={(e, newValue) => setPriceRange(newValue)}
                  onChangeCommitted={onSliderCommitHandler}
                />

                <div className={classes.priceRangeInputs}>
                  <TextField
                    size="small"
                    id="lower"
                    label="Min Price"
                    variant="outlined"
                    type="number"
                    disabled={loading}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceInputChange(e, "lower")}
                    onBlur={onTextfieldCommitHandler}
                  />

                  <TextField
                    size="small"
                    id="upper"
                    label="Max Price"
                    variant="outlined"
                    type="number"
                    disabled={loading}
                    value={priceRange[1]}
                    onChange={(e) => handlePriceInputChange(e, "upper")}
                    onBlur={onTextfieldCommitHandler}
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Typography gutterBottom>Sort By</Typography>

              <FormControl component="fieldset" className={classes.filters}>
                <RadioGroup
                  aria-label="price-order"
                  name="price-order"
                  value={priceOrder}
                  onChange={handleSortChange}
                >
                  <FormControlLabel
                    value="descending"
                    disabled={loading}
                    control={<Radio />}
                    label="Price: Highest - Lowest"
                  />

                  <FormControlLabel
                    value="ascending"
                    disabled={loading}
                    control={<Radio />}
                    label="Price: Lowest - Highest "
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button sixe="small" color="primary" onClick={clearAllFilters}>
            Clear All
          </Button>
        </Paper>
        <div className="main_products">
          {loading ? (
            <Loader />
          ) : (
            products.map((pdct, index) => (
              <Card product={pdct} category={pdct.categoryInfo} key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
