import { createAction } from "@reduxjs/toolkit";
import axios from "../../api/axiosConfig";
import { loaduser,removeuser } from "../reducers/userSlice";

export const asyncCurrentUser = ()=>async(dispatch,getState)=>{
    try {
        const res = JSON.parse(localStorage.getItem("user"));
        if(res==null) console.log("user not found");
        else dispatch(loaduser(res));
    } catch (error) {
        console.log(error);
    }
}


export const asyncLogoutUser = ()=>async(dispatch,getState)=>{
    try {
        localStorage.removeItem("user");
        dispatch(removeuser());
        console.log("user logged out");
    } catch (error) {
        console.log(error);
    }
}

export const asyncLoginUser = (user)=> async(dispatch,getState)=>{
    try {
        const {data} = await axios.get( `/users?username=${user.username}&password=${user.password}`);
        const userObj = data[0];
        // If backend returns id, map it to _id for consistency
        if (userObj && userObj.id) userObj._id = userObj.id;
        localStorage.setItem("user",JSON.stringify(userObj));
        dispatch(loaduser(userObj));
    } catch (error) {
        console.log(error);
    }
}


export const asyncRegisterUser = (user)=> async(dispatch,getState)=>{
    try {
        const res = await axios.post('/users',user);
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}

export const asyncUpdateUser = (userObj, userData) => async(dispatch, getState) => {
    try {
        const id = userObj?._id || userObj?.id;
        if (!id) {
            console.error("User id is missing!");
            return;
        }
        console.log("id: ", id);
        console.log("user Details: ", userData);
        const { data } = await axios.patch(`/users/${id}`, userData);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(loaduser(data));
    } catch (error) {
        console.log(error);
    }
}
