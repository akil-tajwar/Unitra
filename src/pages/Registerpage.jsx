// RegisterPage.js

import React, { useState } from "react";
import CustomInput from "../components/Common/CustomInput";
import CustomSelectInput from "../components/Common/CustomSelectInput";
import css from "./RegisterPage.module.css";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
 
  const homeStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
  ];
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      jeePercentile: "",
      gender: "",
      category: "",
      homeState: "",
    },
  });
  
  const handleRegister = (data) => {
  reset();
    console.log("Registration details:", data);
  
  };


  return (
    <div className={css.container}>
      <h2>Register</h2>
      <br />
      <form onSubmit={handleSubmit(handleRegister)} className={css.form}>
        <CustomInput
          id={"phoneNumber"}
          label={"Phone Number"}
          register={{
            ...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            }),
          }}
          placeholder="Enter your phone number"
          errorMessage={errors.phoneNumber?.message}
          type="number"
        />
        <CustomInput
          id={"jeePercentile"}
          label="JEE Percentile"
          register={{
            ...register("jeePercentile", {
              required: "Jee Percentile is required",
              pattern: {
                value: /^[1-9][0-9]?$|^100$/,
                message: "JEE Percentile must be between 1 and 100",
              },
            }),
          }}
          placeholder="Enter your JEE Percentile"
          errorMessage={errors.jeePercentile?.message}
          type="number"
        />
        <CustomSelectInput
          name="gender"
          register={{
            ...register("gender", { required: "Gender is required" }),
          }}
          label="Gender"
          options={["Select Gender", "Male", "Female"]}
          errorMessage={errors.gender?.message}
        />
        <CustomSelectInput
          id="category"
          name="category"
          label={"Category"}
          register={register("category", { required: "Category is required" })}
          options={[
            "Select Category",
            "General",
            "OBC",
            "SC",
            "ST",
            "EWS",
            "PWD",
          ]}
          errorMessage={errors.category?.message}
        />
        <CustomSelectInput
          id="homeState"
          name="homeState"
          label={"Home State"}
          register={register("homeState", { required: "Home State is required" })}
          options={homeStates?.sort()}
          errorMessage={errors.homeState?.message}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
