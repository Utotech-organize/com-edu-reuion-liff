import axios from "axios";

const client = () => {
  const defualtOptions = {
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": true,
    },
  };

  let instance = axios.create(defualtOptions);

  return instance;
};

export default client();
