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
        localStorage.setItem("user",JSON.stringify(data[0]));
        dispatch(loaduser(data[0]));
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

export const asyncUpdateUser = (id,user) => async(dispatch,getState)=>{
    try {
        console.log("id: ",id);
        console.log("user Details: ",user);
        
    } catch (error) {
        console.log(error);
    }
}