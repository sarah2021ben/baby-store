import { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { ApplyFilter } from "../../Redux/Actions/ProductActions";
import { useSelector, useDispatch } from "react-redux";

import Slider from "@material-ui/core/Slider";
import "./SideBar.css";

const SideBar = () => {
  // Our States

  const [filters, setFilters] = useState({
    selectedCategories: [],
    selectedPrice: [12, 79],
    searchText: "",
  });
  const selectInputRef = useRef();
  const dispatch = useDispatch();
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setFilters({ ...filters, selectedPrice: newValue });
  };

  const handleSearch = (e) => {
    setFilters({ ...filters, searchText: e.target.value });
  };

  const handleToggleCategory = (type) => {
    const currentIndex = filters.selectedCategories.indexOf(type);
    const newcheckCat = [...filters.selectedCategories];
    if (currentIndex === -1) {
      newcheckCat.push(type);
    } else {
      newcheckCat.splice(currentIndex, 1);
    }
    setFilters({ ...filters, selectedCategories: newcheckCat });
  };

  // gerer le changement des marques
  const handleBrand = (e) => {
    setFilters({ ...filters, selectedBrand: e.target.value });
  };
  const handleColor = (e) => {
    setFilters({ ...filters, selectedColor: e.target.value });
  };
  // Pour reinitialiser le checkbox et les input (HTML) après le click sur le reset filter
  const uncheckedHandle = () => {
    let allCheckedButton = document.querySelectorAll(".checked  input");
    allCheckedButton.forEach((value) => (value.checked = false));
    document.querySelectorAll(".clear")[0].value = "";
    console.log(selectInputRef.current);
  };
  const handleSetFilters = (e) => {
    setFilters({
      selectedCategories: [],
      selectedPrice: [12, 79],
      searchText: "",
    });
    uncheckedHandle();
  };

  useEffect(() => {
    dispatch(ApplyFilter(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const category = [
    "Baby girl",
    "Baby boy",
    "Boy clothes",
    "Girl clothes",
    "Shoes",
  ];
  const brands = [
    "CALVIN KLEIN",
    "ZARA",
    "MARC JACOBS",
    "RALPH LAUАREN",
    "H&M",
  ];
  const colors = ["pink", "white", "green", "blue", "gray", "yellow", "brown"];

  return (
    <div className="filter-box">
      <div className="search-box box ">
        <p>Tape here your search:</p>
        <input
          type="text"
          placeholder="search..."
          onChange={handleSearch}
          className="clear"
        />
      </div>
      <div className="category-box box">
        <p> Category</p>
        {category.map((type) => (
          <Form.Check
            className="checked"
            type="checkbox"
            label={type}
            id={type}
            value={type}
            onChange={() => handleToggleCategory(type)}
          />
        ))}
      </div>
      <div className="brand-box box">
        <p> Our Brand </p>
        <Form.Select
          aria-label="Default select example"
          onChange={handleBrand}
          ref={selectInputRef}
        >
          <option >Select...</option>
          {brands.map((brand) => (
            <option value={brand}>{brand}</option>
          ))}
        </Form.Select>
      </div>
      <div className="color-box box">
        <p> Colors </p>

        {colors.map((color) => (
          <Form.Check
            name="group1"
            type="radio"
            className={`${color} checked `}
            onChange={handleColor}
            value={color}
          />
        ))}
      </div>
      <div className="price-box box">
        <p> Price </p>
        <div
          style={{
            margin: "auto",
            display: "block",
            width: "fit-content",
          }}
        >
          <Slider
            value={filters.selectedPrice}
            onChange={rangeSelector}
            valueLabelDisplay="auto"
          />
          Your range of Price is between ${filters.selectedPrice[0]} and $
          {filters.selectedPrice[1]}
        </div>
      </div>
      <div>
        <button onClick={handleSetFilters} className="main-btn">Reset Filters </button>
      </div>
    </div>
  );
};

export default SideBar;
