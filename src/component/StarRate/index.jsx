import React from "react";
import StarPerRow from "./StarPerRow";
import { useStore, actions } from "../../store";

import "./style.scss";

function StarRate() {
  const [state, dispatch] = useStore();
  const { selected, filter } = state;

  const arrayStar = Array.from({ length: 4 }, (_, i) => i + 1);
  function handleOnClick(item) {
    dispatch(
      actions.setFilter({
        ...filter,
        _page: 1,
        rating_like: item,
      })
    );
    dispatch(actions.setSelected(item));
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
