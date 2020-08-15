type Payload = {
  API_CALL: {
    method: string;
  };
  url: string;
  data?: any;
  useNewApiVersion?: boolean;
};

export default async function apiCall(payload: Payload): Promise<any> {
  const { API_CALL, url = false, data } = payload;
  const API_URL = `${process.env.NEXT_PUBLIC_REACT_APP_API_ENDPOINT}${url}`;
  // Setting API parameters
  const apiParams = {
    ...API_CALL,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  };
  // Make API call
  const response = await fetch(API_URL, apiParams);
  return response;
}
