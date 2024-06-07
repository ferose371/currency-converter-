export const heading: string = "currency converter";
const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";
const API_KEY: string = "b541ab8346305d01fccc5d2a";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;
