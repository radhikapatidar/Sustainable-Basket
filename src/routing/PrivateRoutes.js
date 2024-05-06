import { Navigate } from "react-router-dom";


export const PrivateRoutes = ({children}) => {
    const getTokenFromLocalSttorage = JSON.parse(localStorage.getItem("customer"))
    //console.log(getTokenFromLocalSttorage?.token);
    return getTokenFromLocalSttorage?.token !== undefined ? children: (<Navigate to='/login' replace={true}/>)
}