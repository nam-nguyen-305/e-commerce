import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../actions/filter";
import { setSelected } from "../../actions/selected";
import "./style.scss";

function Category() {
  const selected = useSelector((state) => state.selected.selected);
  const filter = useSelector((state) => state.filter.filter);
  const productList = useSelector((state) => state.productList.productList);
  const dispatch = useDispatch();
  function handleFilterCategoryClick(item) {
    dispatch(
      setFilter({
        ...filter,
        categories_like: item,
      })
    );
  }
  function handleOpenMenu(item) {
    handleFilterCategoryClick(item);
    dispatch(setSelected(item));
  }
  const renderCategory = (productList) => {
    let category = [];
    let categoryObj = {};

    productList.forEach((element) => {
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
              style={{ display: selected == item ? "block" : "none" }}
            >
              {categoryObj[item].lv2.map((subItem, subIndex) => {
                return (
                  <li className="category_sub-item" key={subIndex}>
                    <a
                      href="#"
                      className="category_sub-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFilterCategoryClick(subItem);
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
      <ul className="category_list">
        {productList && renderCategory(productList)}
      </ul>
    </section>
  );
}

export default Category;
