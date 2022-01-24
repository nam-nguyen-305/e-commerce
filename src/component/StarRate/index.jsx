import React from "react";
import StarPerRow from "./StarPerRow";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../actions/filter";
import { setSelected } from "../../actions/selected";
import "./style.scss";

function StarRate() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected.selected);
  const filter = useSelector((state) => state.filter.filter);
  const arrayStar = Array.from({ length: 4 }, (_, i) => i + 1);
  function handleOnClick(item) {
    dispatch(
      setFilter({
        ...filter,
        _page: 1,
        rating_like: item,
      })
    );
    dispatch(setSelected(item));
  }

  return (
    <section>
      <div className="title">Ratings</div>
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
    </section>
  );
}

export default StarRate;
