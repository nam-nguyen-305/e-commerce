import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

Prices.propTypes = {
  onPriceChange: PropTypes.func,
};

function Prices(props) {
  const { onPriceChange } = props;
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    async function fetchPostsCategory() {
      try {
        const requestUrl = "http://localhost:3004/product";
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        setData(resJson);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostsCategory();
  }, []);
  function handlePriceChane(item) {
    onPriceChange(item);
    setSelected(item);
  }
  const renderPrices = (data) => {
    let prices_ranges = [];
    data.forEach((item) => {
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
          onClick={() => handlePriceChane(item)}
        >
          ${item}
        </li>
      );
    });
  };
  return (
    <section className="price-range">
      <div className="title">Prices</div>
      <ul className="price-range_list">{data && renderPrices(data)}</ul>
    </section>
  );
}

export default Prices;
