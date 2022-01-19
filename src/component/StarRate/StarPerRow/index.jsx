import React from "react";
import PropTypes from "prop-types";

StarPerRow.propTypes = {
  stars: PropTypes.number,
};

function StarPerRow(props) {
  const { stars, onClick } = props;
  const arrayStar = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div>
      {arrayStar.map((item, index) => {
        return item <= stars ? (
          <span key={index} className="fas fa-star"></span>
        ) : (
          <span key={index} className="far fa-star"></span>
        );
      })}
    </div>
  );
}

export default StarPerRow;
