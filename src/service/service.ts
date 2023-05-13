import axios from "../axios/myAxios";

export const getList = ({ base, quotes }: { base: string; quotes: string }) => {
  return axios.get(`/live?source=${base}&currencies=${quotes}`);
};

export const convert = ({
  from,
  to,
  amount,
}: {
  from: string;
  to: string;
  amount: number;
}) => {
  return axios.get(`/convert?to=${to}&from=${from}&amount=${amount}`);
};
