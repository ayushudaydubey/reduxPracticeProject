
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/UserActions";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submitHandler = (user) => {
    dispatch(asyncLoginUser);
    console.log(user);
    //localStorage.setItem("users",JSON.stringify(user));
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
          {...register("password")}
          className="outline-0 border-white border-b-1"
          type="text"
          placeholder="password: 12345"
        />
        <button className="bg-blue-400 w-1/2 rounded text-xl p-1">Login</button>
      </form>
      <p>Don't have an Account? <Link className="text-blue-400" to="/register">Register Now</Link> </p>
    </div>
  );
};

export default Login;
