import * as httpRequest from '~/utils/httpRequest';
const API_URL = '/Product/';

export const getProduct = (_id: string, accessToken: string) => {
    return httpRequest.get(API_URL + `getProduct/${_id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
export const createProduct = (smallHolderId: string, data: object, accessToken: string) => {
    return httpRequest.post(API_URL + `createProduct/${smallHolderId}`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
export const getAllProduct = (smallHolderId: string, accessToken: string) => {
    return httpRequest.get(API_URL + `getAllProduct/${smallHolderId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
export const getAllProductV2 = (accessToken: string) => {
    return httpRequest.get(API_URL + `getAllProductV2`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
export const updateProfile = (_id: string, data: object, accessToken: string) => {
    return httpRequest.post(API_URL + `updateProfile/${_id}`, data, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
}
export const deleteProduct = (_id: string, accessToken: string) => {
    return httpRequest.deleteOne(API_URL + `deleteProduct/${_id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};