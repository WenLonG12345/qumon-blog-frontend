import axios from "axios";
import get from "lodash/get";
import Router from "next/router";


function parseError(error) {
  if (error.response) {
    return Promise.reject(error.response.data);
  }

  return Promise.reject(error);
}

// axios.interceptors.request.use((config) => {
//   const { authModel } = store.getState();
//   const { token } = authModel || {};

//   const newConfig = { ...config };

//   if (token) {
//     newConfig.headers.Authorization = `Bearer ${token}`;
//   }

//   return newConfig;
// }, parseError);

async function request(url, options) {
  const { ...newOptions } = options || {};

  return axios({ url, ...newOptions })
    .then((r) => {
      if (r.status) {
        return r;
      }

      return {
        ...r,
        status: 204,
      };
    })
    .catch((e) => {
      if (!e.response) {
        return { status: 99999, data: undefined };
      }

      const { status, data } = e.response;
      const errorCode = get(data, "code");
      const errorMsg = get(data, "message");

      // redirect login, clear state
      // if (status === 401) {
      //   Router.push("/");
      // }

      // if (status === 404) {
      //   Router.push("/404");
      // }

      // if (status >= 500 && status <= 504) {
      //   Router.push("/500");
      // }

      return { status, data };
    })
    .finally();
}

export default request;
