import React from "react";
import { useStore, actions } from "../../store";
import "./style.scss";

function Type() {
  const [state, dispatch] = useStore();
  const { productList, selected, filter } = state;

  const handleTypeCheck = (e) => {
    let values = e.target.value;
    if (e.target.checked) {
      dispatch(
        actions.setFilter({
          ...filter,
          _page: 1,
          type_like: values,
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
          type_like: "",
        })
      );
      dispatch(actions.setSelected(""));
    }
  };

  const renderTypes = (productList) => {
    let types = [];
    productList.forEach((item) => {
      if (types.indexOf(item.type) === -1) {
        types.push(item.type);
      }
    });
    types.sort();
    return types.map((item, index) => {
      return (
        <li className="type-range_item" key={index}>
          <input
            type="checkbox"
            value={item}
            onChange={handleTypeCheck}
            checked={selected == item ? "checked" : ""}
          />
          <label>{item}</label>
        </li>
      );
    });
  };

  return (
    <section className="type ">
      <div className="title">Types</div>
      <ul className="type_list common">
        {productList && renderTypes(productList)}
      </ul>
    </section>
  );
}

export default Type;
