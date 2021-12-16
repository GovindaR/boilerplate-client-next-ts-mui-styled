import axios from "axios";
import cookie from "js-cookie";
import { restApiUrl } from "../endpoint";
import { store } from "../../../state/store";

export const getAPI = async (
  endPoint: string,
  { admin = false, isAuth = true, lang, service = "core", id, ...params }: any
) => {
  try {
    const headers: any = {};
    const state = store.getState();
    // Get token from redux store
    const token = state?.core?.currentUser?.accessToken;
    // Get token from cookie
    const authToken = cookie.get("accessToken");
    if (isAuth && (authToken || token))
      headers.Authorization = `Bearer ${authToken || token}`;
    return await axios.get(
      `${restApiUrl(lang, service, admin)}/${endPoint}${id ? "/" + id : ""}`,
      {
        params: {
          ...params,
        },
        headers,
        withCredentials: false,
      }
    );
  } catch (error) {
    handleError(error);
  }
};

export const postAPI = async (
  endPoint: string,
  { admin = false, params, lang, id, service, ...rest }: any
) => {
  try {
    const headers: any = {};
    const state = store.getState();
    // Get token from redux store
    const token = state?.core?.currentUser?.accessToken;
    // Get token from cookie
    const authToken = cookie.get("accessToken");
    if (authToken || token)
      headers.Authorization = `Bearer ${authToken || token}`;
    return await axios.post(
      `${restApiUrl(lang, service, admin)}/${endPoint}${id ? "/" + id : ""}`,
      {
        ...rest,
      },
      {
        headers,
        withCredentials: false,
        params,
      }
    );
  } catch (error) {
    handleError(error);
  }
};

export const putAPI = async (
  endPoint: string,
  { admin = false, id, lang, service, ...rest }: any
) => {
  try {
    const headers: any = {};
    const state = store.getState();
    // Get token from redux store
    const token = state?.core?.currentUser?.accessToken;
    // Get token from cookie
    const authToken = cookie.get("accessToken");
    if (authToken || token)
      headers.Authorization = `Bearer ${authToken || token}`;
    return await axios.patch(
      `${restApiUrl(lang, service, admin)}/${endPoint}${id ? "/" + id : ""}`,
      {
        ...rest,
      },
      {
        headers,
        withCredentials: false,
      }
    );
  } catch (error) {
    handleError(error);
  }
};

export const deleteAPI = async (
  endPoint: string,
  { admin = false, lang, service, id, ...rest }: any
) => {
  try {
    const headers: any = {};
    const { data } = rest;
    const state = store.getState();
    // Get token from redux store
    const token = state?.core?.currentUser?.accessToken;
    // Get token from cookie
    const authToken = cookie.get("accessToken");
    if (authToken || token)
      headers.Authorization = `Bearer ${authToken || token}`;
    return await axios.delete(
      `${restApiUrl(lang, service, admin)}/${endPoint}${id ? "/" + id : ""}`,
      {
        headers,
        data,
        withCredentials: false,
      }
    );
  } catch (error) {
    handleError(error);
  }
};

export const uploadAPI = async (
  endPoint: string,
  { admin = true, lang, service, id, image, ...rest }: any
) => {
  try {
    const headers: any = {
      "Content-Type": "multipart/form-data",
    };
    const state = store.getState();
    // Get token from redux store
    const token = state?.core?.currentUser?.accessToken;
    // Get token from cookie
    const authToken = cookie.get("accessToken");
    if (authToken || token)
      headers.Authorization = `Bearer ${authToken || token}`;

    let formData = new FormData();
    formData.append("image", image);
    const entries = Object.entries(rest);
    if (Object.values(rest).length) {
      for (const [key, value] of entries) {
        formData.append(key, value as string | Blob);
      }
    }

    return await axios.post(
      `${restApiUrl(lang, service, admin)}/${endPoint}/${id || ""}`,
      formData,
      {
        withCredentials: false,
        headers,
      }
    );
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: any) => {
  if (error?.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const receivedError = error.response?.data;
    if (error.response?.status === 440) {
      throw receivedError;
    } else if (
      receivedError.data &&
      typeof receivedError.data === "object" &&
      Object.keys(receivedError.data).length
    ) {
      throw receivedError.data;
    } else if (receivedError.message) {
      if (
        typeof receivedError.message === "object" ||
        typeof receivedError.message === "string"
      )
        throw receivedError.message;
      else throw JSON.stringify(receivedError.message);
    } else if (typeof receivedError === "object") {
      throw receivedError;
    } else {
      throw new Error(JSON.stringify(receivedError));
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("ERROR REQUEST::", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error Message::", error.message);
  }
};
