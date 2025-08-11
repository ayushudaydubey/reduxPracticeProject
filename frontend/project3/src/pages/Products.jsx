import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.productReducer.data);
  const navigate = useNavigate();

  const renderProducts = products?.map((product) => (
    <div
      className="p-[2rem] w-[18rem] h-[34rem] border-2 border-white flex flex-col gap-[.5rem] rounded-2xl"
      key={product.id}
    >
      <img
        onClick={() => navigate(`/productDetails/${product.id}`)}
        src={product.image}
        alt={product.title}
        className="cursor-pointer"
      />
      <h1>{product.title}</h1>
      <h3>Price: ${product.price}</h3>
      <div>
        <button className="bg-blue-400 p-[1rem] w-full rounded-xl mt-[.5rem]">
          Add to cart
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Products</h1>
      <div className="flex p-[3rem] flex-wrap gap-4">{renderProducts}</div>
    </div>
  );
};

export default Products;
