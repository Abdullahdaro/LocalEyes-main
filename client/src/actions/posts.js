import {FETCH_BY_SEARCH, SAVE_UNSAVE_POST_REQUEST, FETCH_SAVED_POSTS, SAVE_UNSAVE_POST_SUCCESS, FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api';

export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPost(id);
        dispatch({type: FETCH_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getPosts = (page) => async (dispatch) => {
    try {
        const { data: { data, currentPage, numberOfPages} } = await api.fetchPosts(page);
        dispatch({type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    } catch (error) {
        console.log(error);
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

        dispatch({type: FETCH_BY_SEARCH, payload: data});
        console.log("i found you", data)
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
  
    try {
      const { data } = await api.likePost(id, user?.token);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const savePost = (id) => async ( dispatch ) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    try {
        dispatch({ type: SAVE_UNSAVE_POST_REQUEST })
        const {data} = await api.savePost(id, user?.token);

        dispatch({type: SAVE_UNSAVE_POST_SUCCESS, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const getSavedPost = (_id) => async ( dispatch ) => {
    try {

        const  {  data:{data} }  = await api.fetchSavedPosts(_id);
        console.log('why where are you?', data)
        dispatch({type: FETCH_SAVED_POSTS, payload:  {data } });

    } catch (error) {
        console.log(error)
    }
}
/* export const savePost = ({post, auth}) => async (dispatch) => {

    try { 
        const User = {...auth.user, saved: [...auth.user.saved, post._id]};

    dispatch ({type: SAVE_UNSAVE_POST_SUCCESS, payload: {...auth, user: User}})

    } catch (error) {
        console.log(error)
    }
    
}
 */