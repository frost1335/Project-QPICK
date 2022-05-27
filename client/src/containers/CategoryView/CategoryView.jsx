import React, { useEffect, useState } from "react";

import {
  Button,
  FormControl,
  FormControlLabel,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

import { Card, Loader } from "../../components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./CategoryView.scss";
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

const CategoryView = () => {
  const { id } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const product = useSelector((state) =>
    id ? state.product.filter((p) => p.categoryID === id) : null
  );

  const category = useSelector((state) =>
    id ? state.categories.find((c) => c._id === id) : null
  );

  const params = location.search ? location.search : null;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sliderMax, setSliderMax] = useState(100000);
  const [priceRange, setPriceRange] = useState([5000, 30000]);
  const [priceOrder, setPriceOrder] = useState("descending");

  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState("");
  const [search, setSearch] = useState("");

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

        if (sorting) {
          if (query.length === 0) {
            query = `?sort=${sorting}`;
          } else {
            query = query + "&sort=" + sorting;
          }
        }

        const { data } = await axios({
          method: "GET",
          url: `/api/category/${id}${query}`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setProducts(data.data);
        updateUIValues(data.uiValues);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.message);
      }
    };

    fetchData();

    return () => cancel();
  }, [params, sorting, filter, id]);

  const searchProduct = async () => {
    if (search.trim()) {
      setLoading(true);
      const { data } = await axios.get(
        `/api/product/search?searchQuery=${search}&categoryID=${id}`
      );
      setProducts(data.data);
      setLoading(false);
    } else {
      setProducts(product);
      navigate(`/category/${id}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchProduct();
    }
  };

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
    setProducts(product);
    setPriceRange([0, sliderMax]);
    navigate(`/category/${id}`);
  };

  return (
    <div className="container">
      <div className="CategoryView">
        <h2>
          Категория: <span>{category ? category.name : null}</span>
        </h2>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography gutterBottom>Фильтеры</Typography>

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
                    label="Мин Цена"
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
                    label="Мах Цена"
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

            <Grid item xs={12} sm={4}>
              <Typography gutterBottom>Сортировка</Typography>

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
                    label="Цена: Высокий - Низкий"
                  />

                  <FormControlLabel
                    value="ascending"
                    disabled={loading}
                    control={<Radio />}
                    label="Цена: Низкий - Высокий "
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography gutterBottom>Искать</Typography>

              <FormControl
                component="fieldset"
                fullWidth
                className={classes.filters}
              >
                <TextField
                  style={{ marginBottom: 15 }}
                  name="search"
                  variant="outlined"
                  label={"Искать продуктов"}
                  fullWidth
                  value={search}
                  onKeyPress={handleKeyPress}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <Button
                  onClick={searchProduct}
                  color="primary"
                  variant="contained"
                >
                  Искать
                </Button>
              </FormControl>
            </Grid>
          </Grid>
          <Button sixe="small" color="primary" onClick={clearAllFilters}>
            Очистить все
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

export default CategoryView;
