import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { asyncCreateProduct } from '../../store/actions/ProductActions'

const CreateProducts = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, reset, handleSubmit } = useForm()

  const createProduct = (product) => {
    const newProduct = {
      id: nanoid(),
      title: product.title,
      price: parseFloat(product.price),
      category: product.category,
      description: product.description,
      image: product.image
    }

    dispatch(asyncCreateProduct(newProduct))
    reset()
    navigate('/products')
  }

  return (
    <div>
      <form 
        className="flex flex-col gap-[2rem] p-[4rem] w-1/3"
        onSubmit={handleSubmit(createProduct)}
      >
        <input {...register("title")} type="text" placeholder="Product title" />
        <input {...register('price')} type="number" step="0.01" placeholder="Price"/>
        <input {...register("category")} type="text" placeholder="Category"/>
        <textarea {...register("description")} placeholder="Enter the product description" />
        <input {...register("image")} type="url" placeholder="Image link" />
        <button className="bg-blue-400 w-1/2 rounded text-xl p-1">Create product</button>
      </form>
    </div>
  )
}

export default CreateProducts
