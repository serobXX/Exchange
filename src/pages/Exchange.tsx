import { useEffect, useState } from "react";
import { getList } from "../service/service";
import { Card, Select, Option, Typography } from "@material-tailwind/react";

const CURRENCIES = ["RUB", "USD", "GBP", "EUR"];

const Exchange = () => {
  const [base, setBase] = useState("RUB");
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [list, setList] = useState<any>({});

  useEffect(() => {
    selectBase(base);
    
    const interval = setInterval(() => {
      selectBase(base);
    }, 5000);

    return () => clearInterval(interval);
  }, [base]);

  const selectBase = async (value: string) => {
    setBase(value);
    const currencies = CURRENCIES.filter((elm: string) => elm !== value);
    setCurrencies(currencies);
    const quotes = currencies.join(",");
    const list = await getList({ base, quotes });
    setList(list.data.quotes);
  };

  return (
    <>
      <Select
        onChange={(e) => e && setBase(e)}
        variant="standard"
        label={`Base value ${base}`}
      >
        {CURRENCIES.map((curr: string) => (
          <Option key={curr} value={curr}>
            {curr}
          </Option>
        ))}
      </Select>
      <Card className="overflow-auto h-full w-full pt-3">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {currencies.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    1 {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(list).map((elm, index) => {
                const isLast = index === Object.keys(list).length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <td key={index} className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {(1 / list[elm]).toFixed(2)}
                    </Typography>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default Exchange;
