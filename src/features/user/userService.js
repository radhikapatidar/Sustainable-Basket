import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async(userData)=> {
    const response = await axios.post( `${base_url}user/register`,userData);
    if(response.data){
        if(response.data){
        return response.data;
    }
}
};
const login = async(userData)=> {
    const response = await axios.post( `${base_url}user/login`,userData);
    if(response.data){
        if(response.data){
            localStorage.setItem("customer",JSON.stringify(response.data));
         }
        return response.data;
    }
};

const getUserWishlist = async() => {
    const response = await axios.get(`${base_url}user/wishlist`, config)
    if(response.data){
        return response.data;
    }
};

const addToCart = async(cartData) => {
    const response = await axios.post(`${base_url}user/cart`,cartData, config)
    if(response.data){
        return response.data;
    } 
}
// const addToCart = async (cartData) => {
//     try {
//         // Send request to add item to cart
//         const response = await axios.post(`${base_url}user/cart`, cartData, config);
//         if (response.data) {
//             // Add item to localStorage
//             const storedCart = localStorage.getItem('cart');
//             const updatedCart = storedCart ? JSON.parse(storedCart) : [];
//             updatedCart.push(cartData);
//             localStorage.setItem('cart', JSON.stringify(updatedCart));
            
//             return response.data;
//         } 
//     } catch (error) {
//         console.error("Error adding item to cart:", error);
//         throw error;
//     }
// }
const getCart = async() => {
    const response = await axios.get(`${base_url}user/cart`, config)
    if(response.data){
        return response.data;
    } 
}
 const removeProductFromCart = async(cartItemId) => {
    const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`,config)
    if(response.data){
        return response.data;
    }
 }

 const updateProductFromCart = async(cartDetail) => {
    const response = await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,config)
    if(response.data){
        return response.data;
    }
 }

 const createOrder = async(orderDetail) => {
    const response = await axios.post(`${base_url}user/cart/create-order`,orderDetail,config)
    if(response.data){
     return response.data
    } 
}

 const getUserOrders = async() => {
    const response = await axios.get(`${base_url}user/getmyorders`,config)
   if(response.data){
    return response.data
   } 
}
// const getUserOrders = async() => {
//     const response = await axios.get(`${base_url}user/getmyorders`,config)
//    if(response.data){
//     return response.data
//    } 
// }

const removeOrder = async(orderId) => {
    const response = await axios.delete(`${base_url}user/cart/delete-order/${orderId}`,config)
    if(response.data){
        return response.data;
    }
 }


const updateUser = async(data) =>{
    const response = await axios.put(`${base_url}user/edit-user`,data,config)
    if(response.data){
     return response.data
    } 
}

const forgotPassToken = async(data)=>{
    const response = await axios.post(`${base_url}user/forgot-password-token`,data)
    if(response.data){
     return response.data
    } 
}

const resetPass = async(data)=>{
    const response = await axios.put(`${base_url}user/reset-password/${data.token}`,{password:data?.password})
    if(response.data){
     return response.data
    } 
}

// const makePayment = async (paymentData) => {
//     try {
//         const response = await axios.post(`${base_url}pay`, paymentData, config);
//         if (response.data) {
//             return response.data;
//         }
//     } catch (error) {
//         // Handle error
//         console.error('Error occurred while processing payment:', error);
//         throw error; // Optionally re-throw the error to handle it in the component
//     }
// };
export const authService = {
    register,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
    getUserOrders,
    updateUser,
    forgotPassToken,
    resetPass,
    createOrder,
    removeOrder,
//     makePayment
 }