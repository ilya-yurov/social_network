import dialogsReducer from './reducers/dialogs-reducer/dialogs-reducer'
import profileReducer from './reducers/profile-reducer/profile-reducer'
import sidebarReducer from './reducers/sidebar-reducer/sidebar-reducer'
import usersReducer from './reducers/users-reducer/users-reducer'
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import authReducer from './reducers/auth-reducer/auth-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './reducers/app-reducer/app-reducer'


let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store

export const createStoreCopy = () => {
	return createStore(reducers, applyMiddleware(thunkMiddleware))
}