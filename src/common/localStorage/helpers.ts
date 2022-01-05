import { TOKEN, USER_ID, WALLET_ADDRESS } from './constants';
import { localStorageCache } from './handle';

// - Token ------------------------------------------------
export const getToken = () => localStorageCache.retrieve(TOKEN);
export const removeToken = () => localStorageCache.remove(TOKEN);
export const setToken = (value: string) =>
  localStorageCache.store(TOKEN, value);

// - User ------------------------------------------------
export const getUserId = () => localStorageCache.retrieve(USER_ID);
export const removeUserId = () => localStorageCache.remove(USER_ID);
export const setUserId = (value: string) =>
  localStorageCache.store(USER_ID, value);

// - WalletAddress ------------------------------------------------
export const getWalletAddress = () =>
  localStorageCache.retrieve(WALLET_ADDRESS);
export const removeWalletAddress = () =>
  localStorageCache.remove(WALLET_ADDRESS);
export const setWalletAddress = (value: string) =>
  localStorageCache.store(WALLET_ADDRESS, value);
