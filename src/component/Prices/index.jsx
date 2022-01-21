import React, { useState } from "react";

import { useStore, actions } from "../../store";

import "./style.scss";

function Prices() {
  const [state, dispatch] = useStore();

  const { selected, productList, filter } = state;
  function handlePriceChange(item) {
    dispatch(
      actions.setFilter({
        ...filter,
        price_range_like: item,
      })
    );
    dispatch(actions.setSelected(item));
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
