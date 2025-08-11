import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProducts from '../pages/admin/CreateProducts'
import UpdateProducts from '../pages/admin/UpdateProducts'
import ProductDetails from '../components/ProductDetails'
import UserProfile from '../pages/user/UserProfile'
import UpdateUser from '../pages/user/UpdateUser'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/products' element={<Products />} />
    <Route path='/register' element={<Register />} />

    <Route path='/admin/create-product' element={<CreateProducts />} />
    <Route path='/admin/update-product' element={<UpdateProducts />} />

    <Route path="/productdetails/:id" element={<ProductDetails />} />
    <Route path='/profile' element={<UserProfile />} >
      <Route path='edit' element={<UpdateUser />} />
    </Route>
   </Routes>
  )
}

export default MainRoutes