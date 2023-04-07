import axios from "axios";

export const swrFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);
