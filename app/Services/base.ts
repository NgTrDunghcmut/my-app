
import axios from 'axios';


export const baseRequest = axios.create();

// Add a request interceptor
baseRequest.interceptors.request.use(
	({ headers, url, method = 'GET', ...rest }: any) => {

		const config = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=utf-8',
				Authorization: `Bearer`,
				//	Authorization: `123456789bearer fsdgfsd`,
				'X-Requested-With': 'XMLHttpRequest',
				'Access-Control-Allow-Origin': '*',
				...headers,
			},
			method,
			baseURL: process.env.NEXT_PUBLIC_API,
			url,
			...rest,
		};
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
baseRequest.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
        console.log('error', error?.message)

		throw new Error(error);
        
	}
);