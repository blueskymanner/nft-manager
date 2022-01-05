import Router, { useRouter } from 'next/router';

export const redirect = (path: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  Router.push(path);
};

export const GetCurrentUrl = () => {
  const router = useRouter();
  return router.asPath;
};

export const parserJson = (data: any) => {
  if (!data) return;

  return JSON.parse(JSON.stringify(data));
};

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const formatWalletAddress = (address: string) => {
  return address ? address.slice(0, 8) + '...' + address.slice(-8) : '';
};

export const twoDigits = num => String(num).padStart(2, '0');
