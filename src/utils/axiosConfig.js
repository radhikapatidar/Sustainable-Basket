// export const base_url = "https://sustainablebasket.com/sustainablebasketapi/api/";
export const base_url = "http://localhost:5000SS/api/";

//export const base_url = "http://192.168.29.188:5000/api/";
const getTokenFromLocalStrorage = localStorage.getItem("customer")? JSON.parse(localStorage.getItem("customer")): null;

export const config = {
    headers: {
        Authorization: `Bearer ${
        getTokenFromLocalStrorage !== null ? getTokenFromLocalStrorage.token: ""}`,
        Accept : "application/json",
    },
};

