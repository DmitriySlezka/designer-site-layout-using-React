import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./SectionBlock.module.css";

const cx = classnames.bind(styles);

export default function SectionBlock({ as, className, bgColor, textAlign, children }) {
   const Base = as || "div";

   return (
      <Base
         className={cx(
            className,
            "section-block",
            { [`section-block--${bgColor}`]: bgColor },
            { [`section-block--${textAlign}`]: textAlign },
         )}>
         {children}
      </Base>
   );
}

SectionBlock.propTypes = {
   as: PropTypes.element,
   className: PropTypes.string,
   bgColor: PropTypes.string,
   textAlign: PropTypes.string,
   children: PropTypes.any,
};

SectionBlock.defaultProps = {
   bgColor: "white",
};
