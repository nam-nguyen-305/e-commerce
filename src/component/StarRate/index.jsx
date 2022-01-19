import React, { useState } from "react";
import PropTypes from "prop-types";
import StarPerRow from "./StarPerRow";
import "./style.scss";

StarRate.propTypes = {
  onStarChange: PropTypes.func,
};

function StarRate(props) {
  const { onStarChange } = props;
  const [selected, setSelected] = useState("");

  const arrayStar = Array.from({ length: 4 }, (_, i) => i + 1);
  function handleOnClick(item) {
    if (onStarChange) onStarChange(item);
    setSelected(item);
  }

  return (
    <div className="star-rate">
      {arrayStar.map((item, index) => (
        <div
          key={index}
          className={selected === item ? "active" : ""}
          onClick={() => handleOnClick(item)}
        >
          <StarPerRow stars={item} />
        </div>
      ))}
    </div>
  );
}

export default StarRate;
