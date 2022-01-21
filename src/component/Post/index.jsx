import React, { useEffect } from "react";
import { useStore, actions } from "../../store";

import queryString from "query-string";
import "./style.scss";
import StarPerRow from "../StarRate/StarPerRow";

function PostList() {
  const [state, dispatch] = useStore();
  const { productPerPage, filter } = state;

  useEffect(() => {
    async function fetchProductPerPage() {
      try {
        const paramString = queryString.stringify(filter);
        const requestUrl = `http://localhost:3004/product?${paramString}`;
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        dispatch(actions.setProductsPerPage(resJson));
        dispatch(
          actions.setPaginations({
            _page: filter._page,
            _limit: 16,
            _totalRows: 116,
          })
        );
      } catch (error) {
        console.log("fail");
      }
    }
    fetchProductPerPage();
    // const filterValueArr = [
    //   filters.name_like,
    //   filters.categories_like,
    //   filters.price_range_like,
    // ];
    // const flag = filterValueArr.some((value) => value !== "");
    // setIsClear(flag);
  }, [filter]);

  const content = productPerPage.map((post, index) => (
    <div key={index} className="list-item mb-2">
      <div className="list-item_picture-wrapper">
        <div className="list-item_picture">
          <img src={post.image} alt={post.name} />
        </div>
      </div>
      <div className="list-item_desc-wrapper">
        <div className="list-item_name">{post.name}</div>
        <div className="list-item_price">${post.price}</div>
        <div className="list-item_rating">
          <StarPerRow stars={post.rating} />
        </div>
      </div>
    </div>
  ));

  return <div className="list-post mb-4">{content}</div>;
}

export default PostList;
