import React, { useRef } from "react";
import { useStore, actions } from "../../../store";

import "./Header.scss";
const logo = require("../../../assets/img/logo.png");

function Header() {
  const [state, dispatch] = useStore();
  const { searchTerm, filter } = state;

  const typingTimeoutRef = useRef(null);
  function handleSearchDebounce(value) {
    dispatch(
      actions.setFilter({
        ...filter,
        name_like: value.searchTerm,
      })
    );
  }
  function handleSearchTermChange(e) {
    const inputValue = e.target.value;

    dispatch(actions.setSearchItem(inputValue));
    // SET -- 100, CLEAR, SET -- 300 -> SUBMIT
    // SET -- 300 -> SUBMIT
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: inputValue,
      };
      handleSearchDebounce(formValue);
    }, 300);
  }
  return (
    <header className="header d-flex">
      <a href="#" className="header_logo-img">
        <img src={logo} alt="logo" />
      </a>
      <a href="#" className="header_logo-text">
        amazing
      </a>
      <div className="input-group">
        <div className="header_search-box">
          <input
            type="text"
            className="form-control"
            placeholder="Search a product"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <span className="input-group-btn">
          <button className="btn btn-default">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
