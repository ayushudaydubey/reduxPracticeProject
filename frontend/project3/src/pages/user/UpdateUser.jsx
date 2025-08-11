import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateUser } from '../../store/actions/UserActions';

const UpdateUser = () => {
  const dispatch = useDispatch();

  const user = useSelector((state)=> state.userReducer.data);
  console.log("user des:",user);

  const navigate = useNavigate();
  const {register,reset,handleSubmit} = useForm({
    defaultValues: {
      username : user.username,
      email: user.email,
      password: user.password
    }
  });



  const updateDetails = (data)=>{
    dispatch(asyncUpdateUser(user, data)); // Pass the full user object
    navigate('/profile');
  }



  return (
    <div>
      <h1>Update Detail</h1>
      <form onSubmit={handleSubmit(updateDetails)}>
        <div>
        <span>Name:</span>
        <input {...register("username")} type="text" placeholder='username'/>
      </div>
      <div>
        <span>Email:</span>
        <input {...register("email")} type="text" placeholder='email'/>
      </div>
      <div>
        <span>Password:</span>
        <input {...register("password")} type="text" placeholder='password'/>
      </div>




      <button>Update</button>
      </form>
    </div>
  )
}

export default UpdateUser
