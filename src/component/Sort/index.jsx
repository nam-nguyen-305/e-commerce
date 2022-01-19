import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Sort.propTypes = {
  sortValue: PropTypes.string,
  onPageChange: PropTypes.func,
};

function Sort(props) {
  const { sortValue, onPageChange } = props;
  const sortOptions = ["asc", "desc"];
  function handlePageChange(e) {
    if (onPageChange) onPageChange(e);
  }
  return (
    <section className="sort">
      <div className="sort-by">
        <label>Sort by</label>
        <div id="sort-by-select">
          <select onChange={(e) => handlePageChange(e)} value={sortValue}>
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
