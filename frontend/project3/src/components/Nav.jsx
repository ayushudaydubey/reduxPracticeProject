import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/UserActions";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  };

  return (
    <div className="flex gap-[3rem] text-3xl p-[2rem] items-center justify-center">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/products">Products</NavLink>

      {user && user.isAdmin ? (
        <NavLink to="/admin/create-product">Create</NavLink>
      ) : (
        <></>
      )}

      {user ? (
        <>
          {/* <button onClick={() => logoutHandler()}>Logout</button> */}
          <NavLink to={'/profile'}>Profile</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </div>
  );
};

export default Nav;
