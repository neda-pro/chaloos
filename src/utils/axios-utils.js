import axios from "axios";

const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const request = ({ ...options }) => {
  const onSuccess = (response) => response;
  const onError = (error) => error;

  return client.request(options).then(onSuccess).catch(onError);
};
