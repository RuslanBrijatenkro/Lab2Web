import axios from './axiosDefault'
export function CreateUser(UserData)
{
    return axios.post('http://localhost:5000/registration',{name:UserData.name,email:UserData.email,password:UserData.password,flag:UserData.isAdmin})
}
export const CreateBooking = id => axios.post('http://localhost:5000/booking',{id})
export const DeleteConcert =  id=> axios.delete(`http://localhost:5000/getConcerts/${id}`)