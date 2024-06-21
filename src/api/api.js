import axios from "axios";

const baseUrl = "https://gateway.scan-interfax.ru"

export const userLogin = async (login, password) => {
    const request = await axios.post(`${baseUrl}/api/v1/account/login`, {
        login,
        password
    });
    console.log(request.data);
    return request.data;
}

export const getUserInfo = async (accessToken) =>  {
    const request = await axios.get(`${baseUrl}/api/v1/account/info`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    console.log(request.data)
    return request.data
}