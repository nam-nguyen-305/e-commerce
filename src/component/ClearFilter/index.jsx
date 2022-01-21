import React, { useEffect, useState } from "react";
import { useStore, actions } from "../../store";

function ClearFilter() {
  const [state, dispatch] = useStore();
  const { filter } = state;
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    // const filterArr = Object.keys(filter);

    // const lastFilterArr = filterArr.filter((item) => {
    //   return item != "_page" && item != "_limit";
    // });
    const filterArr = [
      filter._sort,
      filter._order,
      filter.name_like,
      filter.categories_like,
      filter.price_range_like,
      filter.rating_like,
      filter.brand_like,
      filter.type_like,
    ];
    const flag = filterArr.some((value) => value !== "");
    setIsClear(flag);
  }, [filter]);
  function handleClearFilter() {
    dispatch(
      actions.setFilter({
        ...filter,
        _sort: "",
        _order: "",
        name_like: "",
        categories_like: "",
        price_range_like: "",
        rating_like: "",
        brand_like: "",
        type_like: "",
      })
    );
    dispatch(actions.setSearchItem(""));
    dispatch(actions.setSelected(""));
  }
  return (
    <section className="brand">
      {isClear && <button onClick={handleClearFilter}>Clear Filter</button>}
    </section>
  );
}

export default ClearFilter;
