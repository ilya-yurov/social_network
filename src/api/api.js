import axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '4be4028a-d5f3-47fe-8ba5-3e9bb42ed4d7'
	}
})


export const usersAPI = {

	async getUsers(currentPage = 1, pageSize = 5, term = '') {
		let response = await instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}`);
		return response.data;
	},

	async followUser(userId) {
		let response = await instance.post(`follow/${userId}`);
		return response.data;
	},

	async unfollowUser(userId) {
		let response = await instance.delete(`follow/${userId}`);
		return response.data;
	}
}
export const authAPI = {

	async isAuth() {
		let response = await instance.get('auth/me');
		return response.data;
	},
	async login(email, password, rememberMe = false) {
		let response = await instance.post('auth/login', { email, password, rememberMe });
		return response.data;
	},
	async logout() {
		let response = await instance.delete('auth/login');
		return response.data;
	}
}
export const profileAPI = {

	async getUserProfile(userId) {
		let response = await instance.get(`profile/${userId}`);
		return response.data;
	},
	async getUserStatus(userId) {
		let response = await instance.get(`profile/status/${userId}`);
		return response.data;
	},
	async updateUserStatus(status) {
		let response = await instance.put('profile/status', {
			status: status
		});
		return response.data;
	}
}
