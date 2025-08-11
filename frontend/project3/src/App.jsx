import React, { useEffect } from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './components/Nav'
import { loaduser } from './store/reducers/userSlice'
import { useDispatch } from 'react-redux'
import { loadProducts } from './store/reducers/productSlice'
import { asyncLoadProducts } from './store/actions/ProductActions'
import { asyncCurrentUser } from './store/actions/UserActions'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, [])

  return (
    <div className='w-screen h-screen bg-gray-800 text-white'>
      <Nav/>
      <MainRoutes />
    </div>
  )
}

export default App