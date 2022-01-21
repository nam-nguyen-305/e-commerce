import React from "react";
import { useStore, actions } from "../../store";

import "./style.scss";

function Sort() {
  const [state, dispatch] = useStore();
  const { selected, filter } = state;
  const sortOptions = ["asc", "desc"];
  function handlePageChange(e) {
    dispatch(
      actions.setFilter({
        ...filter,
        _order: e.target.value,
        _sort: "price",
        _limit: 16,
      })
    );
    dispatch(actions.setSelected(e.target.value));
  }
  return (
    <section className="sort">
      <div className="sort-by">
        <label>Sort by</label>
        <div id="sort-by-select">
          <select onChange={(e) => handlePageChange(e)} value={selected}>
            <option>Features</option>
            {sortOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default Sort;
