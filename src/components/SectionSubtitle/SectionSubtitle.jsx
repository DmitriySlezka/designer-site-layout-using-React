import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./SectionSubtitle.module.css";

const cx = classnames.bind(styles);

const SectionSubtitle = ({
   className,
   children,
   color,
   textAlign,
   noMarginBottom,
}) => {
   return (
      <div
         className={cx(
            className,
            "section-subtitle",
            { [`section-subtitle--${color}`]: color },
            { [`section-subtitle--${textAlign}`]: textAlign },
            { [`section-subtitle--no-margin-bottom`]: noMarginBottom }
         )}>
         {children}
      </div>
   );
};

SectionSubtitle.propTypes = {
   className: PropTypes.string,
   color: PropTypes.string,
   textAlign: PropTypes.string,
   children: PropTypes.any,
   noMarginBottom: PropTypes.bool,
};

SectionSubtitle.defaultProps = {
   color: "gray",
};

export default SectionSubtitle;
