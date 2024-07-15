import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginAuth } from "../../utils/api/auth.api";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginAuth({ email: auth.email, password: auth.password }, dispatch);
  };
  return (
    <div className="w-screen h-screen bg-pink-100 flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <h1 className="font-extrabold text-3xl text-gray-700">
            Myntra Social
          </h1>
          <span className="text-lg font-semibold text-gray-600">
          Showcase Personal Styles with Myntra Products
          </span>
        </div>
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <form onSubmit={handleLogin}>
            <div className="bg-white h-[300px] p-[20px] rounded-md flex flex-col justify-between shadow-lg">
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    password: e.target.value,
                  });
                }}
                required
                minLength={3}
              />
              <button className="h-[50px] rounded-lg bg-pink-600 hover:bg-pink-700 transition text-white text-lg font-bold">
                {isFetching ? "Logging In" : "Login"}
              </button>
              <span className="text-center text-pink-600 cursor-pointer">
                Forgot Password?
              </span>
              <button className="h-[50px] w-1/2 rounded-lg bg-pink-600 hover:bg-blue-700 transition text-white text-lg font-bold self-center">
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
