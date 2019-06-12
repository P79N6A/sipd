export const getLocalStorageValue = (key: string) => {
  return window.localStorage.getItem(key);
};

export const setLocalStorageValue = (key: string, value: any) => {
  window.localStorage.setItem(key, value);
};
