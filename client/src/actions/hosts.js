import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getHosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchHosts();
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createHost = (host) => async(dispatch) => {
    try {
        const { data } = await api.createHost(host);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updateHost = (id, host) => async (dispatch) => {
    try {
        const {data} = await api.updateHost(id, host);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteHost = (id) => async (dispatch) => {
    try {
        await api.deleteHost(id);
        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}