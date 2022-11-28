import axios from 'axios';

const url2 = 'http://localhost:5000/hosts';

const API = axios.create( {baseURL: 'http://localhost:5000' });

/* API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
}); 
 */
export const fetchPosts = (page) => API.get(`/discover?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/discover/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const createPost = (newPost) => API.post('/discover', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/discover/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/discover/${id}`);
export const likePost = (id) => API.patch(`/discover/${id}/`, id )
export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)

export const fetchHosts = () => axios.get(url2);
export const createHost = (newHost) => axios.post(url2, newHost);
export const updateHost = (id, updatedHost) => axios.patch(`${url2}/${id}`, updatedHost);
export const deleteHost = (id) => axios.delete(`${url2}/${id}`) ;