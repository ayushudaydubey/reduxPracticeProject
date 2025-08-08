import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/UserActions";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    console.log(user);
    dispatch(asyncRegisterUser(user));
    navigate('/login');
    reset();
  };

  return (
    <div className="px-[5rem]">
      <h1 className="text-3xl">Login page</h1>
      <form
        className="flex flex-col gap-[2rem] p-[4rem] w-1/3"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          {...register("username")}
          className="outline-0 border-white border-b-1"
          type="text"
          placeholder="username: (john/admin)"
        />
        <input
          {...register("email")}
          className="outline-0 border-white border-b-1"
          type="email"
          placeholder="email: (username-@gmail.com)"
        />
        <input
          {...register("password")}
          className="outline-0 border-white border-b-1"
          type="text"
          placeholder="password: 12345"
        />
        <button className="bg-blue-400 w-1/2 rounded text-xl p-1">Register User</button>
      </form>
      <p>Already have an Account? <Link className="text-blue-400" to="/login">Login Now</Link> </p>
    </div>
  );
};

export default Register;
