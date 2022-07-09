import { create } from 'apisauce';

import authStorage from '../auth/storage';
import cache from '../utility/cache';
import settings from '../config/settings';

const apiClient = create({
  // baseURL: 'http://192.168.1.210:9000/api'
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;

});

// apiClient.get('/listings').then(response => {
//   if (!response.ok) {
//     response.problem;
//   }
// });

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  // before
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
  // after
};

export default apiClient;