import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
const logo = require("../../../assets/img/logo.png");

Header.propTypes = {
  onSubmit: PropTypes.func,
};

Header.defaultProps = {
  onSubmit: null,
};
function Header(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    // SET -- 100, CLEAR, SET -- 300 -> SUBMIT
    // SET -- 300 -> SUBMIT
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
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
