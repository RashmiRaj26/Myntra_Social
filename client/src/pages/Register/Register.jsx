import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUser } from "../../utils/api/auth.api";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (auth.confirmPassword !== auth.password) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await registerUser({
          username: auth.username,
          email: auth.email,
          password: auth.password,
        });
        toast.success(res.data.message);
        navigate("/login");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-pink-100 flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <h1 className="font-extrabold text-5xl text-gray-700">
            Myntra Social
          </h1>
          <span className="text-lg font-semibold text-gray-600">
            Showcase Personal Styles with Myntra Products
          </span>
        </div>
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <form
            onSubmit={handleRegister}
            className="bg-white h-[400px] p-[20px] rounded-md flex flex-col justify-between shadow-lg"
          >
            <input
              type="name"
              placeholder="Username"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              onChange={(e) => {
                setAuth({
                  ...auth,
                  username: e.target.value,
                });
              }}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              onChange={(e) => {
                setAuth({
                  ...auth,
                  email: e.target.value,
                });
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              onChange={(e) => {
                setAuth({
                  ...auth,
                  password: e.target.value,
                });
              }}
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              onChange={(e) => {
                setAuth({
                  ...auth,
                  confirmPassword: e.target.value,
                });
              }}
              required
            />
            <button
              type="submit"
              className="h-[50px] rounded-lg bg-pink-600 hover:bg-Pink-700 transition text-white text-lg font-bold"
            >
              Sign Up
            </button>
            <button className="h-[50px] w-1/2 rounded-lg bg-pink-600 hover:bg-Pink-700 transition text-white text-lg font-bold self-center">
              <Link to={"/login"}>Login</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
