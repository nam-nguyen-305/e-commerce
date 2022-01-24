import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../actions/filter";
import { setSelected } from "../../actions/selected";
import "./style.scss";

function Prices() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected.selected);
  const filter = useSelector((state) => state.filter.filter);
  const productList = useSelector((state) => state.productList.productList);

  function handlePriceChange(item) {
    dispatch(
      setFilter({
        ...filter,
        price_range_like: item,
      })
    );
    dispatch(setSelected(item));
  }
  const renderPrices = (productList) => {
    let prices_ranges = [];
    productList.forEach((item) => {
      if (prices_ranges.indexOf(item.price_range) === -1) {
        prices_ranges.push(item.price_range);
      }
    });
    prices_ranges.sort();
    return prices_ranges.map((item, index) => {
      return (
        <li
          className={selected === item ? "active" : ""}
          key={index}
          onClick={() => handlePriceChange(item)}
        >
          ${item}
        </li>
      );
    });
  };
  return (
    <section className="price-range">
      <div className="title">Prices</div>
      <ul className="price-range_list">
        {productList && renderPrices(productList)}
      </ul>
    </section>
  );
}

export default Prices;
