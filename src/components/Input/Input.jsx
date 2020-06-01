import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from './Input.module.css'

const Input = ({ id, className, textarea, label, error, ...attrs }) => {

   const cx = classNames.bind(styles);

   return (
      <>
         <div className={cx("label-wrapper")}>
            {label && (
               <label className={cx("label")} htmlFor={id}>
                  {label}
               </label>
            )}
            {attrs.required && (
               <span className={cx("required")}> Required </span>
            )}
         </div>
         {error && <span className={cx("error")}>{error}</span>}
         {textarea && (
            <textarea
               className={cx("textarea", className, { error })}
               name={id}
               {...attrs}>
            </textarea>
         )}
         {!textarea && (
            <input
               name={id}
               id={id}
               className={cx("input", className, { error })}
               {...attrs}
            />
         )}
      </>
   );
};

Input.propTypes = {
   textarea: PropTypes.bool,
   id: PropTypes.string.isRequired,
   className: PropTypes.string,
   label: PropTypes.string,
   error: PropTypes.string,
};

Input.defaultProps = {
   textarea: false,
   className: "",
   label: "",
   error: "",
};

export default Input;