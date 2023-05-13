import { useState } from "react";
import { convert } from "../service/service";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Select,
  Option,
  Spinner,
} from "@material-tailwind/react";

const CURRENCIES = ["RUB", "USD", "GBP", "EUR"];

const Converter = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [summary, setSummary] = useState(0);
  const [loading, setLoading] = useState(false);

  const arrowUpDown = async () => {
    if (!to || !from) return;
    setFrom(to);
    setTo(from);
    if (amount) {
      setLoading(true);
      const sum = await convert({ to: from, from: to, amount });
      setSummary(sum.data.result);
      setLoading(false);
    }
  };

  const onConvert = async () => {
    setLoading(true);
    const sum = await convert({ from, to, amount });
    setSummary(sum.data.result);
    setLoading(false);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <Card
        color="white"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 h-[300px] text-center"
        >
          <div className="flex flex-col gap-2 z-10 items-center mt-2">
            <Select
              value={from}
              onChange={(e) => e && setFrom(e)}
              label={`From ${from}`}
            >
              {CURRENCIES.map((curr: string) => (
                <Option key={curr} value={curr}>
                  {curr}
                </Option>
              ))}
            </Select>
            <ArrowsUpDownIcon
              onClick={arrowUpDown}
              className="cursor-pointer"
              width={"16px"}
            />
            <Select
              value={to}
              onChange={(e) => e && setTo(e)}
              label={`To ${to}`}
            >
              {CURRENCIES.map((curr: string) => (
                <Option key={curr} value={curr}>
                  {curr}
                </Option>
              ))}
            </Select>
          </div>

          <Typography
            variant="h1"
            color="blue"
            className="mt-6 flex justify-center mt-16 gap-1 text-xl font-normal"
          >
            {loading ? (
              <Spinner />
            ) : (
              <>
                <p> {summary.toFixed(2)} </p>
                <span className="self-end text-md">/{to}</span>
              </>
            )}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <Input
            type="number"
            disabled={!from || !to}
            onChange={(e) => setAmount(Number(e.target.value))}
            label={from}
          />
          <Button
            disabled={!from || !to || amount <= 0 || from === to}
            onClick={onConvert}
            className="w-full mt-2"
          >
            Convert
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Converter;
