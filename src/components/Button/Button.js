import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export default class Button extends React.Component {
   render() {
      return <button className={cx("button")}>
         {this.props.children}
      </button>;
   }
}

Button.propTypes = {
   children: PropTypes.any,
};
