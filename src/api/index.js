import axios from 'axios';

const instance = axios.create({ baseURL:process.env.REACT_APP_SERVER_URL });


const getUsers = () => instance.get('/users');
const createUser = (payload) => instance.post('/users', payload);
const deleteUser = (payload) => instance.delete(`/users/${payload}`)
const editUser = (payload) => instance.put(`/users/${payload}`)


const api = {
    getUsers,
    deleteUser,
    createUser,
    editUser
}



export default api;