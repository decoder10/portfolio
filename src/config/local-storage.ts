export const getLocalStorage = <T>(name: string, defaultValue = '{}'): T => {
  try {
    return JSON.parse(localStorage.getItem(name) || defaultValue);
  } catch (e) {
    return (localStorage.getItem(name) || defaultValue) as T;
  }
};

export const addLocalStorage = <T>(name: string, state: T) => {
  const serializedState = JSON.stringify(state);

  localStorage.setItem(name, serializedState);
};
