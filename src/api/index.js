import axios from "axios";
import { config } from "../lib/configLib";

export const axiosController = new AbortController();

const instance = axios.create({
  baseURL: config.cms.baseUrl,
  signal: axiosController.signal,
});

export const getAsyncRequest = async (url, config = {}) => {
  const response = await instance.get(url, config);
  return response.data;
};

export const postAsyncRequest = async (url, data, config = {}) => {
  const response = await instance.post(url, data, config);
  return response.data;
};
