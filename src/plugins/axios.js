/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: 'http://yapi.demo.qunar.com/mock/63548',
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  config => config, // Do something before request is sent
  error => Promise.reject(error)
  ,
);

// Add a response interceptor
_axios.interceptors.response.use(
  response =>
    // Do something with response data
    response,
  error =>
    // Do something with response error
    Promise.reject(error)
  ,
);

Plugin.install = function (vm) {
  vm.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(vm.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
