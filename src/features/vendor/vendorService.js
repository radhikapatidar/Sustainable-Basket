import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const vendorRegister = async(vendorData)=> {
    const response = await axios.post( `${base_url}/vendor/register`,vendorData);
    if(response.data){
        return response.data;
    }
}

export const vendorService = {
    vendorRegister,
}