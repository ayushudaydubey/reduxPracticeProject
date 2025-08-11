import axios from "../../api/axiosConfig";
import { loadProducts } from "../reducers/productSlice";

export const asyncLoadProducts = () => async (dispatch,getState)=>{
    try {
        const { data } = await axios.get("/products");
        dispatch(loadProducts(data));
    } catch (error) {
        console.log(error);
    }
}

export const asyncCreateProduct = (product)=>async(dispatch,getState)=>{
    try {
        await axios.post('/products',product);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}

export const asyncUpdateProductDetails = (id,product)=>async(dispatch,getState)=>{
    try {
        await axios.patch('/products/'+id,product);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}

export const asyncDeleteProduct = (id)=>async(dispatch,getState)=>{
    try {
        await axios.delete('/products/'+id);
        dispatch(asyncLoadProducts());
        console.log("product deleted");
    } catch (error) {
        console.log(error);
    }
}