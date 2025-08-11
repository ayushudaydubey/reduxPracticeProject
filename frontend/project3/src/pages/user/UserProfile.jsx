import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const user = useSelector((state)=> state.userReducer.data);
    const navigate = useNavigate();

    const updateUserProfile = (user)=>{
        console.log("clicked on update");
        navigate('edit');
    }
    
  return (
    <div className='px-[4rem]'>
        <h1 className='text-center text-3xl'>User Details</h1>
        <div className='flex pt-[3rem] flex-col gap-[1rem] text-xl w-1/2 rounded'>
            <h1>Name: {user.username}</h1>
            <h1>Email: {user.email}</h1>
            <button onClick={()=> updateUserProfile()} className='bg-blue-400 w-1/2 p-[.5rem] text-xl'>Edit Details</button>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  );
}

export default UserProfile;