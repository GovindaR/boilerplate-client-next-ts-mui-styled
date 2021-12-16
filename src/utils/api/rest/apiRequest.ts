import axios from "axios";
import cookie from "js-cookie";
import { store } from "../../../state/store";

export const getApiCall = async (
  link: string,
  { auth = false, ...data }: any
) => {
  // try {
  const headers: any = {};
  const state = store.getState();
  // Get token from redux store
  const token = state?.core?.currentUser?.accessToken;
  // Get token from cookie
  const authToken = cookie.get("accessToken");
  if (auth && (authToken || token)) {
    headers.Authorization = `Bearer ${authToken || token}`;
  }
  return await axios.get(link, { params: data, headers });
  // } catch (error) {
  //   handleError(error);
  // }
};

export const postApiCall = async (
  link: string,
  { auth = false, ...data }: any
) => {
  // try {
  const headers: any = {};
  const state = store.getState();
  // Get token from redux store
  const token = state?.core?.currentUser?.accessToken;
  // Get token from cookie
  const authToken = cookie.get("accessToken");
  if (auth && (authToken || token)) {
    headers.Authorization = `Bearer ${authToken || token}`;
  }
  return await axios.post(link, { ...data }, { headers });
};

// interface getApiCallProps {
//   data?: any;
//   link: string;
//   auth?: boolean;
// }
