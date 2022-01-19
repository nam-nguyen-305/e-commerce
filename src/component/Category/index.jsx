import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

Category.propTypes = {
  onClick: PropTypes.func,
};

function Category({ onClick }) {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchPostsCategory() {
      try {
        const requestUrl = "http://localhost:3004/product";
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        setData(resJson);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostsCategory();
  }, []);

  function handleOpenMenu(item) {
    onClick(item);
    setSelectedCategory(item);
  }

  const renderCategory = (list) => {
    let category = [];
    let categoryObj = {};

    list.forEach((element) => {
      category.push(element.categories);
    });

    category.forEach((element) => {
      if (!categoryObj[element[0]]) {
        if (element.length > 1) {
          categoryObj[element[0]] = {
            lv1: element[0],
            lv2: [element[1]],
          };
        } else {
          categoryObj[element[0]] = {
            lv1: element[0],
            lv2: [],
          };
        }
      } else {
        if (element.length > 1) {
          let lv2Arr = categoryObj[element[0]].lv2;
          if (!lv2Arr.includes(element[1])) {
            categoryObj[element[0]] = {
              ...categoryObj[element[0]],
              lv2: [...lv2Arr, element[1]],
            };
          }
        }
      }
    });

    let categoryKeys = Object.keys(categoryObj);
    return categoryKeys.map((item, index) => {
      return (
        <li
          className="category_item"
          onClick={() => {
            handleOpenMenu(item);
          }}
          key={index}
        >
          <a href="#" className="category_link">
            <i className="fas fa-angle-right"></i>
            {item}
          </a>

          {categoryObj[item].lv2 && (
            <ul
              className="category_sub-list"
              style={{ display: selectedCategory == item ? "block" : "none" }}
            >
              {categoryObj[item].lv2.map((subItem, subIndex) => {
                return (
                  <li className="category_sub-item" key={subIndex}>
                    <a
                      href="#"
                      className="category_sub-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClick(subItem);
                      }}
                    >
                      <i className="fas fa-angle-right"></i>
                      {subItem}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <section className="category">
      <div className="category_title">Show results for</div>
      <ul className="category_list">{data && renderCategory(data)}</ul>
    </section>
  );
}

export default Category;
