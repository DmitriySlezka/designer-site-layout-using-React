import React from "react";
import styles from "./FooterLink.module.css";
import classnames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classnames.bind(styles);

 const FooterLink = ({ className, href, children }) => {
   return (
      <a href={href} className={cx(className, "link")}>
         {children}
      </a>
   );
}

FooterLink.propTypes = {
   className: PropTypes.string,
   href: PropTypes.string,
   children: PropTypes.any,
};

export default FooterLink;
