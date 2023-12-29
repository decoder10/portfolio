const env = process.env;

export const API_ROOT = env.REACT_APP_API_ROOT;
export const APP_DOMAIN = env.REACT_APP_DOMAIN;
export const LOADER_TIMOUT = env.REACT_APP_LOADER_TIMOUT ? +env.REACT_APP_LOADER_TIMOUT : 0;
