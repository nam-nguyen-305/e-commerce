import React, { useEffect, useState } from "react";

function Brand({ filters, setFilters }) {
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

  const handleBrandCheck = (e) => {
    let values = e.target.value;
    if (e.target.checked) {
      setFilters({
        ...filters,
        _page: 1,
        brand_like: values,
      });
    } else {
      setFilters({
        _page: 1,
        _limit: 16,
        name_like: "",
        categories_like: "",
        price_range_like: "",
        brand_like: "",
      });
    }
  };

  const renderBrands = (data) => {
    let brands = [];
    data.forEach((item) => {
      if (brands.indexOf(item.brand) === -1) {
        brands.push(item.brand);
      }
    });
    brands.sort();
    return brands.map((item, index) => {
      return (
        <li className="brand-range_item" key={index}>
          <input type="checkbox" value={item} onClick={handleBrandCheck} />
          <label>{item}</label>
        </li>
      );
    });
  };

  return (
    <section className="brand">
      <div className="title">Brands</div>
      <ul className="brand_list common">{data && renderBrands(data)}</ul>
    </section>
  );
}

export default Brand;
