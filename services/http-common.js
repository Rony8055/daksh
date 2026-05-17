import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://apidaksh.dakshtest.com/api/";

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const http2 = axios.create({
  baseURL: BASE_URL,
});

const handleResponseError = (error) => {
  if (error.response) {
    const status = error.response.status;

    if (status === 500) {
      console.error("Server error");
    }

    if (status === 404) {
      console.error("API not found");
    }
  }

  return Promise.reject(error);
};

http.interceptors.response.use(
  (res) => res,
  handleResponseError
);

http2.interceptors.response.use(
  (res) => res,
  handleResponseError
);

export { http, http2 };