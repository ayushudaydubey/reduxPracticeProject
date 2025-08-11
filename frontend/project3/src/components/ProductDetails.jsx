import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncUpdateProductDetails,asyncDeleteProduct } from "../store/actions/ProductActions";

import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.data);
  const users = useSelector((state)=> state.userReducer.data);
  const product = products.find((p) => String(p.id) === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const { reset, register, handleSubmit } = useForm({
    defaultValues: {
      image: "",
      title: "",
      description: "",
      price: "",
      category: "",
    },
  });


  useEffect(() => {
    if (product) {
      reset({
        image: product.image || "",
        title: product.title || "",
        description: product.description || "",
        price: product.price || "",
        category: product.category || "",
      });
    }
  }, [product, reset]);

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProductDetails(id,product));
  }

  const deleteProduct = (id)=>{
    dispatch(asyncDeleteProduct(id));
    navigate('/products');
  }

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-gray-800 text-white">
      <div>
        <h1>Product details</h1>
        <div className="flex p-[3rem]">
          <img src={product.image} alt={product.title} />
          <div className="p-[5rem] flex flex-col gap-[1rem]">
            <h1 className="text-4xl font-mono">{product.title}</h1>
            <p className="text-xl">{product.description}</p>
            <h3 className="text-2xl">Price: ${product.price}</h3>
            <button className="bg-blue-400 p-[1rem] rounded-2xl text-2xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {users && users.isAdmin ? (<div>
        <hr />
        <h1 className="text-3xl px-[4rem] py-[2rem]">Update Product Details</h1>
        <form
          className="flex flex-col gap-[2rem] px-[4rem] w-2/3"
          onSubmit={handleSubmit(updateProductHandler)}
        >
          <input {...register("title")} type="text" placeholder="Product title" />
          <input {...register("price")} type="number" step="0.01" placeholder="Price" />
          <input {...register("category")} type="text" placeholder="Category" />
          <textarea {...register("description")} placeholder="Enter the product description" />
          <input {...register("image")} type="url" placeholder="Image link" />
          <div className="flex gap-[2rem]">
            <button className="bg-blue-400 w-1/2 rounded text-xl p-1">
            Update product
          </button>

          <button type="button" onClick={()=> deleteProduct(id)} className="bg-red-400 w-1/2 rounded text-xl p-1">
            Delete product
          </button>
          </div>
        </form>
      </div>) : ""}
    </div>
  );
};

export default ProductDetails;
