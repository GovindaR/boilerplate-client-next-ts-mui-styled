import Cookies from "js-cookie";

// **************************** Local Storage *****************************
export const getItemLocal = (n: string) => localStorage.getItem(n);
export const removeItemLocal = (n: string) => localStorage.removeItem(n);
export const setItemLocal = (n: string, v: any) => localStorage.setItem(n, v);

// **************************** Session Storage ****************************
export const getItem = (n: string) => sessionStorage.getItem(n);
export const removeItem = (n: string) => sessionStorage.removeItem(n);
export const setItem = (n: string, v: any) => sessionStorage.setItem(n, v);

// **************************** Cookies ************************************
export const setCookie = (n: string, v: any) =>
  Cookies.set(n, v, {
    SameSite: "Lax",
  });
export const getCookie = (n: string) => Cookies.get(n);
export const removeCookie = (n: string) => Cookies.remove(n);
