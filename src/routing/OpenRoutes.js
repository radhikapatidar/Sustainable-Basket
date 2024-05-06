import { Navigate } from "react-router-dom";

export const OpenRoutes = ({children}) => {
    const getTokenFromLocalSttorage = JSON.parse(localStorage.getItem("customer"))
    console.log(getTokenFromLocalSttorage?.token);
    return getTokenFromLocalSttorage?.token === undefined ? children: (<Navigate to='/' replace={true}/>)
}