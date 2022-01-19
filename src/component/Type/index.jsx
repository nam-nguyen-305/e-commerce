import React, { useEffect, useState } from "react";
import "./style.scss";

function Type({ filters, setFilters }) {
  const [data, setData] = useState([]);
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

  const handleTypeCheck = (e) => {
    let values = e.target.value;
    if (e.target.checked) {
      setFilters({
        ...filters,
        _page: 1,
        type_like: values,
      });
    } else {
      setFilters({
        _page: 1,
        _limit: 16,
        name_like: "",
        categories_like: "",
        price_range_like: "",
        type_like: "",
      });
    }
  };

  const renderTypes = (data) => {
    let types = [];
    data.forEach((item) => {
      if (types.indexOf(item.type) === -1) {
        types.push(item.type);
      }
    });
    types.sort();
    return types.map((item, index) => {
      return (
        <li className="type-range_item" key={index}>
          <input type="checkbox" value={item} onClick={handleTypeCheck} />
          <label>{item}</label>
        </li>
      );
    });
  };

  return (
    <section className="type ">
      <div className="title">Types</div>
      <ul className="type_list common">{data && renderTypes(data)}</ul>
    </section>
  );
}

export default Type;
