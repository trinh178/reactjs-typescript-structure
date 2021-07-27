import axios, { AxiosError } from 'axios';

export type ApiMethod = 'GET' | 'POST';
export interface ApiResponse {
    code: number,
    error: {
        code: string,
        message: string,
        data: any,
    },
    data: any,
}

const baseUrl = process.env.SERVICE_URL;

// Header
const headers = {
    // ..
};

const instance = axios.create({
    baseURL: baseUrl,
    headers,
});

const api = async (url: string, method: ApiMethod, data?: object): Promise<ApiResponse> => {
    try {
        const result = await instance({
            url,
            method,
            data,
        });
        return {
            code: result.status,
            error: null,
            data: result.data,
        };
    } catch (axiosError) {
        const err = axiosError as AxiosError;
        return {
            code: err.response?.status,
            error: {
                code: err.code,
                message: err.message,
                data: err.response?.data,
            },
            data: null,
        };
    }
};

export default api;
