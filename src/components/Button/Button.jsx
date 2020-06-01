import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Button = ({
   children,
   className,
   active,
   disabled,
   invert,
   onClick,
   ...attrs
}) => {

   const Tag = attrs.href ? "a" : "button";

   const onClickAction = (e) => {
      if (disabled) {
         e.preventDefault();
      } else {
         return onClick(e);
      }
   };

   return (
      <Tag
         className={cx("button", className, { active }, { invert })}
         disabled={disabled}
         onClick={onClickAction}
         {...attrs}
      >
         {children}
      </Tag>
   );
};

Button.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
   active: PropTypes.bool,
   disabled: PropTypes.bool,
   invert: PropTypes.bool,
   onClick: PropTypes.func,
};

Button.defaultProps = {
   onClick: () => {},
   className: "",
   disabled: false,
   active: false,
   invert: false,
};

export default Button;
