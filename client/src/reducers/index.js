import { combineReducers } from "redux";
import posts from './posts';
import hosts from './hosts';
import auth from './auth';

export default combineReducers({ posts, auth, hosts });