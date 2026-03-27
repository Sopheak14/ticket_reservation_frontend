import axios from "axios";
import config from "./config";

export const request = (url = "get", method = "", data = {}) => {
  return axios({
    url: config.base_url + url,
    method: method,
    data: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("Request failed:", error);
      throw error;
    });
};
