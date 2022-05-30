import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import {combineReducers, legacy_createStore as createStore} from "redux";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer
});

let store = createStore(reducers);
window.store = store;
export default store;