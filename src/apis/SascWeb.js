import axios from 'axios'


const headers = () =>{
    const currentUser =  JSON.parse(localStorage.getItem('user'));
    if (currentUser){
        return {
            'Authorization': 'Bearer '+currentUser.access_token
        }
    }
    console.log('no user');
    return {}
};

const api =  axios.create({
    'baseURL': 'http://localhost:5000/api',
    'headers': headers()
});
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        console.log('teeeest')
    }
    return error;
});

export default api;