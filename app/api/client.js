import { create } from 'apisauce';

import cache from '../utility/cache';

const apiClient = create({
  baseURL: 'http://192.168.1.210:9000/api'
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