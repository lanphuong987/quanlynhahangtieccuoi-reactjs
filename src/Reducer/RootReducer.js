import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import adminReducer from "./AdminReducer"

const mainReducer = combineReducers({
    'user': userReducer,
    'admin': adminReducer,
})

export default mainReducer