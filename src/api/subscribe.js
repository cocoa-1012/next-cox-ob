import { postAsyncRequest } from "./index";

const subscribe = async (body) => {
  return postAsyncRequest("/subscription/subscription", body);
};

export default subscribe;
