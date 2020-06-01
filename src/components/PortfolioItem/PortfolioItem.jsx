import React from "react";
import styles from "./PortfolioItem.module.css";
import PropTypes from "prop-types";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const PortfolioItem = ({ href, image }) => {
   return (
      <a className={cx("item")} href={href}>
         <img src={image} alt="project" />
      </a>
   );
}

PortfolioItem.propTypes = {
   href: PropTypes.string,
   image: PropTypes.string,
};

export default PortfolioItem;
