import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../actions/filter";
import { setSelected } from "../../actions/selected";
import "./style.scss";

function Sort() {
  const selected = useSelector((state) => state.selected.selected);
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  const sortOptions = ["asc", "desc"];
  function handlePageChange(e) {
    dispatch(
      setFilter({
        ...filter,
        _order: e.target.value,
        _sort: "price",
        _limit: 16,
      })
    );
    dispatch(setSelected(e.target.value));
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
