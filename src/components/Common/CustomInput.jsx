import React from "react";
import css from "./CustomInput.module.css";

const CustomInput = ({
  type,
  id,
  label,
  register,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className={css.field}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type ? type : "text"}
        {...register}
        id={id}
        placeholder={placeholder}
      />
      {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default CustomInput;
