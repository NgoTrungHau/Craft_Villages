import * as httpRequest from '~/utils/httpRequest';
const API_URL = '/SmallHolder/';

export const getSmallHolder = (_id: string, accessToken: string) => {
  return httpRequest.get(API_URL + `getSmallHolder/${_id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const getAllSmallHolder = (_id: string, accessToken: string) => {
  return httpRequest.get(API_URL + `getAllSmallHolder/:id`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const getAllSmallHolderV2 = (accessToken: string) => {
  return httpRequest.get(API_URL + `getAllSmallHolderV2`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const updateProfile = (
  smallHolderId: string,
  data: object,
  accessToken: string,
) => {
  return httpRequest.post(API_URL + `updateProfile/${smallHolderId}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const deleteSmallHolder = (
  smallHolderId: string,
  accessToken: string,
) => {
  return httpRequest.deleteOne(API_URL + `deleteSmallHolder/${smallHolderId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
