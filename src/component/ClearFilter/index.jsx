import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../actions/filter";
import { setSearchItem } from "../../actions/search";
import { setSelected } from "../../actions/selected";
function ClearFilter() {
  const dispatch = useDispatch();
  const [isClear, setIsClear] = useState(false);
  const selected = useSelector((state) => state.selected.selected);
  const filter = useSelector((state) => state.filter.filter);
  useEffect(() => {
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
      setFilter({
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
    dispatch(setSearchItem(""));
    dispatch(setSelected(""));
  }
  return (
    <section className="brand">
      {isClear && <button onClick={handleClearFilter}>Clear Filter</button>}
    </section>
  );
}

export default ClearFilter;
