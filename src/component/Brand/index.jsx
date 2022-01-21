import React from "react";
import { useStore, actions } from "../../store";

function Brand() {
  const [state, dispatch] = useStore();
  const { productList, selected, filter } = state;

  const handleBrandCheck = (e) => {
    let values = e.target.value;
    if (e.target.checked) {
      dispatch(
        actions.setFilter({
          ...filter,
          _page: 1,
          brand_like: values,
        })
      );
      dispatch(actions.setSelected(values));
    } else {
      dispatch(
        actions.setFilter({
          _page: 1,
          _limit: 16,
          name_like: "",
          categories_like: "",
          price_range_like: "",
          brand_like: "",
        })
      );
      dispatch(actions.setSelected(""));
    }
  };

  const renderBrands = (productList) => {
    let brands = [];
    productList.forEach((item) => {
      if (brands.indexOf(item.brand) === -1) {
        brands.push(item.brand);
      }
    });
    brands.sort();
    return brands.map((item, index) => {
      return (
        <li className="brand-range_item" key={index}>
          <input
            type="checkbox"
            value={item}
            onChange={handleBrandCheck}
            checked={selected == item ? "checked" : ""}
          />
          <label>{item}</label>
        </li>
      );
    });
  };

  return (
    <section className="brand">
      <div className="title">Brands</div>
      <ul className="brand_list common">
        {productList && renderBrands(productList)}
      </ul>
    </section>
  );
}

export default Brand;
