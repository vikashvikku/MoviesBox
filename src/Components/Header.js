import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Appstate } from "../App";
import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
  const useAppState = useContext(Appstate);
  return (
    <div className="header sticky top-0 z-10 bg-black text-3xl flex justify-between text-red-500 font-bold p-3 border-b-2 border-grey-500">
      <Link to={"/"}>
        <span>
          Movies<span className="text-white">Box</span>
        </span>
      </Link>
      {useAppState.login ? (
        <>
          <Link to={"/addmovie"}>
            <h1 className="text-lg text-white flex items-center cursor-pointer">
              <Button>
                <AddIcon className="mr-1 text-blue" />{" "}
                <span className="text-white">Add New</span>
              </Button>
            </h1>
          </Link>
        </>
      ) : (
        <Link to={"/login"}>
          <h1 className="text-lg bg-green-500 text-white flex items-center cursor-pointer">
            <Button>
              <span className="text-white font-medium capitalize">Login</span>
            </Button>
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
