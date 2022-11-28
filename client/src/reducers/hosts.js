import { DELETE, CREATE, UPDATE, FETCH_ALL } from "../constants/actionTypes";

export default (hosts = [], action) => {
    switch(action.type) {
        case DELETE:
            return hosts.filter((host) => host._id !== action.payload);
        case UPDATE:
            return hosts.map((host) => host._id === action.payload._id ? action.payload : host)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return  [...hosts, action.payload];

        default: 
            return hosts;
    }
}