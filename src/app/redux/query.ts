import { BaseQueryFn } from '@reduxjs/toolkit/query';
import api, { ApiMethod } from 'app/network/api';

export const ownBaseQuery = (): BaseQueryFn<{
    url: string
    method: ApiMethod
    data?: object
    }, unknown, unknown> => async ({ url, method, data }) => {
    const result = await api(url, method, data);
    return {
        data: result.data,
        error: result.error,
    };
};
