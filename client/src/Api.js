import axios from 'axios';
const url = 'http://localhost:3012';
export const fetchBooks = () => {
    return axios.get(`${url}/books`);
}

export const postBook = (book) => {
    return axios.post(`${url}/books`,book);
}

export const delBook = (id) => {
    return axios.delete(`${url}/books/${id}`)
}