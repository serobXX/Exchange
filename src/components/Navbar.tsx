import { Link } from "react-router-dom";
import { Navbar, Typography } from "@material-tailwind/react";

const Head = () => {
  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none px-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium font-bold"
        >
          Exchange
        </Typography>
        <ul className="flex gap-2">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal underline"
          >
            <Link to="/" className="flex items-center">
              List
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal underline"
          >
            <Link to="/convert" className="flex items-center">
              Convert
            </Link>
          </Typography>
        </ul>
      </div>
    </Navbar>
  );
}

export default Head;