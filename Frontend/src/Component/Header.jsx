import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLoginToggle } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.user.toggle);
  const user = useSelector((store) => store.user.userName);
  const handleLogout = async () => {
    const response = await fetch(`http://localhost:4040/v1/auth/logout`);
    const json = await response.json();
    if (!json?.success) {
      dispatch(handleLoginToggle(json?.success));
      navigate("/");
    }
  };
  return (
    <>
      <nav className="flex items-center justify-around min-h-[10vh]">
        <Link to={"/"}>
          <div className="logo capitalize text-xl">
            Pro <span className=" font-bold ">India.</span>
          </div>
        </Link>
        <div className="flex space-x-5 items-center">
          {toggle && <h1>Welcome - {user}</h1>}
          {toggle && (
            <Link to={"/createProduct"}>
              <button className="border rounded-lg px-4 py-2 hover:shadow-md">
                Create Product
              </button>
            </Link>
          )}
          {!toggle && (
            <>
              {" "}
              <Link to={"/login"}>
                <button className="border rounded-lg px-4 py-2 hover:shadow-md">
                  Log In
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="border rounded-lg px-4 py-2 hover:shadow-md">
                  Sign Up
                </button>
              </Link>
            </>
          )}
          {toggle && (
            <button
              onClick={handleLogout}
              className="border rounded-lg px-4 py-2 hover:shadow-md"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
