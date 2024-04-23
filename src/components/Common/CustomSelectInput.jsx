// CustomSelectInput.js

import React from "react";
import css from "./CustomInput.module.css";

const CustomSelectInput = ({
  name,
  label,
  options,
  register,
  errorMessage,
}) => {
  return (
    <div className={css.field}>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register} defaultValue={"Select"}>
        {options?.map((option) => (
          <option className={css.option} key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default CustomSelectInput;
