import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./SectionTitle.module.css";

const cx = classnames.bind(styles);

export default function SectionTitle({ as, className, children, color, textAlign }) {
   
   const Base = as || "h2";

   return (
      <Base
         className={cx(
            className,
            "section-title",
            { [`section-title--${color}`]: color },
            { [`section-title--${textAlign}`]: textAlign }
         )}>
         {children}
      </Base>
   );
}

SectionTitle.propTypes = {
   as: PropTypes.string,
   className: PropTypes.string,
   color: PropTypes.string,
   textAlign: PropTypes.string,
   children: PropTypes.any,
};

SectionTitle.defaultProps = {
   color: "black",
};

