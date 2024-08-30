import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLoginToggle, handleUserName } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      return alert("All fields are mandatory");
    }
    const response = await fetch(
      `http://localhost:4040/v1/auth/login`,
      options
    );
    const json = await response.json();
    if (json?.success) {
      console.log(json);
      dispatch(handleLoginToggle(json?.success));
      dispatch(handleUserName(json?.username));
      alert(json.message);
      navigate("/");
    }
  };
  return (
    <>
      <div className="registerContainer w-[40%]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-center text-2xl font-bold">LogIn User</h1>
          <div className="my-4">
            <label className="block " htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-gray-100 py-2 px-2 mt-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="w-full bg-gray-100 py-2 px-2 mt-2"
              type="text"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="password"
            />
          </div>
          <button
            onClick={handleLogin}
            className="mt-4 w-full cursor-pointer bg-purple-500 py-2 rounded-lg text-white font-bold"
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Not a Account ?{" "}
            <Link to="/register">
              <span className="hover:underline">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
