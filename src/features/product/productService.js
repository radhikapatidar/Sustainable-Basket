import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const getProducts = async(data)=> {
    console.log(data);
    const response = await axios.get( `${base_url}product?${data?.category?`category=${data?.category}&&`:""}${data?.brand?`brand=${data?.brand}&&`:""}${data?.tag?`tags=${data?.tag}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`);
    if(response.data){
        return response.data;
    }
};

// const getProducts = async (data) => {
// console.log(data);
// try {
//      const queryParams = new URLSearchParams();

//     if (data.brand) queryParams.append('brand', data.brand);
//     if (data.tag) queryParams.append('tags', data.tag);
//     if (data.category) queryParams.append('category', data.category);
//     if (data.minPrice) queryParams.append('price[gte]', data.minPrice);
//     if (data.maxPrice) queryParams.append('price[lte]', data.maxPrice);
//     if (data.sort) queryParams.append('sort', data.sort);

//     const url = `${base_url}product?${queryParams.toString()}`;
//     const response = await axios.get(url);
//     return response.data;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         throw error; // Rethrow the error so that the caller can handle it
//     }
// };


// single product
const getSingleProduct = async(slug)=> {
    const response = await axios.get( `${base_url}product/${slug}`);
    if(response.data){
        return response.data;
    }
};

// add wishlist
const addToWishlist = async(prodId)=> {
    const response = await axios.put( `${base_url}product/wishlist`,{ prodId } ,config);
    if(response.data){
        return response.data;
    }
};

// add rating
const rateProduct = async(data)=> {
    const response = await axios.put( `${base_url}product/rating`,data,config);
    if(response.data){
        return response.data;
    }
};
export const productService = {
    getProducts,
    addToWishlist,
    getSingleProduct,
    rateProduct
}