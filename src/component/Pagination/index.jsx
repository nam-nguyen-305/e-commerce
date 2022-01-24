import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../actions/filter";

function Pagination() {
  const paginations = useSelector((state) => state.pagination.pagination);
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const { _page, _limit, _totalRows } = paginations;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    dispatch(
      setFilter({
        ...filter,
        _page: newPage,
        _limit: 16,
      })
    );
  }

  function handleRenderPagination() {
    const totalPagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);
    const renderBigArray =
      totalPages <= 8
        ? totalPagesArr
        : [_page, _page + 1, _page + 2, "...", totalPages];
    return renderBigArray.map((item) => {
      return (
        <button
          onClick={() => handlePageChange(item)}
          className={item === _page ? "active" : "non-acive"}
          key={item}
        >
          {" "}
          {item}{" "}
        </button>
      );
    });
  }
  return (
    <section className="pagination">
      <div className="pagination_content">
        <button
          disabled={_page <= 1}
          className="pagination_prev"
          onClick={() => handlePageChange(_page - 1)}
        >
          <i className="fa fa-angle-left fa-2x"></i>
          Previous page
        </button>
        {handleRenderPagination()}
        <button
          disabled={_page >= totalPages}
          onClick={() => handlePageChange(_page + 1)}
          className="pagination_next"
        >
          Next page
          <i className="fa fa-angle-right fa-2x"></i>
        </button>
      </div>
    </section>
  );
}

export default Pagination;
