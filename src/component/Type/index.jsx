import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../actions/filter";
import { setSelected } from "../../actions/selected";

function Type() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected.selected);
  const filter = useSelector((state) => state.filter.filter);
  const productList = useSelector((state) => state.productList.productList);
  const handleTypeCheck = (e) => {
    let values = e.target.value;
    if (e.target.checked) {
      dispatch(
        setFilter({
          ...filter,
          _page: 1,
          type_like: values,
        })
      );
      dispatch(setSelected(values));
    } else {
      dispatch(
        setFilter({
          _page: 1,
          _limit: 16,
          name_like: "",
          categories_like: "",
          price_range_like: "",
          type_like: "",
        })
      );
      dispatch(setSelected(""));
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
