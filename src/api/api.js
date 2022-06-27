import axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '4be4028a-d5f3-47fe-8ba5-3e9bb42ed4d7'
	}
})


export const usersAPI = {

	getUsers(currentPage = 1, pageSize = 5) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
	},

	followUser(userId) {
		return instance.post(`follow/${userId}`)
		.then(response => response.data)
	},

	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`)
		.then(response => response.data)
	}
}
export const authAPI = {

	isAuth() {
		return instance.get('auth/me')
		.then(response => response.data)
	},
	login(email, password, rememberMe = false) {
		return instance.post('auth/login', {email, password, rememberMe})
		.then(response => response.data)
	},
	logout() {
		return instance.delete('auth/login')
		.then(response => response.data)
	}
}
export const profileAPI = {

	getUserProfile(userId) {
		return instance.get(`profile/${userId}`)
		.then(response => response.data)
	},
	getUserStatus(userId) {
		return instance.get(`profile/status/${userId}`)
		.then(response => response.data)
	},
	updateUserStatus(status) {
		return instance.put('profile/status', {
			status: status
		})
		.then(response => response.data)
	}
}
