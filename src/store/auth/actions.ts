import apiCall from 'store/config/api';
import { API_END_POINTS } from 'store/config/constants';

export const login = async (user: {
  role: string;
  username: string;
  password: string;
  otp: string;
}) => {
  const url = API_END_POINTS.USER_LOGIN;
  const apiArgs = {
    API_CALL: {
      method: 'POST',
    },
    data: user,
    url,
    isAuthRequired: false,
  };
  await apiCall(apiArgs);
};
