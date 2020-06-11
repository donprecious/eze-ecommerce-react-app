import axios from "axios";
import uikit from "uikit";
axios.interceptors.response.use(null, (error) => {
  const isClientError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!isClientError) {
    uikit.alert("something went wrong, please try again later");
    console.log(error);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
