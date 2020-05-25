import React from "react";
import PropTypes from "prop-types";
import styles from "./Achievement.module.css";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export default function Achievement({ imgSrc, imgAlt, count, text }) {
   return (
      <div className={cx("achievement")}>
         <div className={cx("img")}>
            <img src={imgSrc} alt={imgAlt} />
         </div>
         <div className={cx("info-block")}>
            <h6 className={cx("count")}>{count}</h6>
            <div className={cx("text")}>{text}</div>
         </div>
      </div>
   );
}

Achievement.propTypes = {
   imgSrc: PropTypes.string,
   imgAlt: PropTypes.string,
   count: PropTypes.string,
   text: PropTypes.string,
};
