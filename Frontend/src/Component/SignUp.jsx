import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = async () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      return alert("All fields are mandatory");
    }
    const response = await fetch(
      `http://localhost:4040/v1/auth/register`,
      options
    );
    const json = await response.json();

    if (json?.success) {
      alert(json.message);
      navigate("/login");
    }
  };
  return (
    <>
      <div className="registerContainer w-[40%]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-center text-2xl font-bold">Register User</h1>
          <div className="mt-4">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="w-full bg-gray-100 py-2 px-2 mt-2"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={onChange}
            />
          </div>
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
            onClick={handleRegister}
            className="mt-4 w-full cursor-pointer bg-purple-500 py-2 rounded-lg text-white font-bold"
          >
            Register
          </button>
          <p className="mt-4 text-center">
            Already Have an account ?{" "}
            <Link to="/login">
              <span className="hover:underline">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
