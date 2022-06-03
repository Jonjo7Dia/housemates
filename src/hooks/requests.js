import axios from 'axios';


const API_URL = 'http://localhost:8080/api/';


async function httpSignUp(data){
    const url = `${API_URL}signUp`;

    try {
        const{data: res} = await axios.post(url, data);
        return  {error: false, message: res};
    } catch (error) {
        return {error: true, message: error.response.data};
        console.log('hello');
    }

}
async function httpLogin(data){
    const url = `${API_URL}login`;
    try {
        const{data: res} = await axios.post(url, data);
        console.log(res.message);
        return {error: false, message: res};
        console.log('hello');
    } catch (error) {
        return {error: true, message: error.response};
    }
}



export {httpSignUp, httpLogin};