import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import StarPerRow from "../StarRate/StarPerRow";

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;

  const content = posts.map((post, index) => (
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
