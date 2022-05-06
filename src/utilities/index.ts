export const setLocalItem = (key: string, value: any) => {
  typeof window !== "undefined" &&
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key: string) => {
  if (typeof window === "undefined") return null;
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
