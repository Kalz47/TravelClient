import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { login } from "../../actions/auth";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = value;

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(login(value));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="md:px-40 sm:px-20 px-10">
        <div className="flex h-screen ">
          <div className="m-auto">
            <div className="border border-gray-200 rounded-lg">
              <div className="md:grid md:grid-cols-3">
                <div className="md:col-span-1 md:border-r border-gray-200 border-r-0 p-6 bg-gradient-to-r  rounded-t-md from-pink-500 to-red-500 ">
                  <h1 className="text-xl text-white">Hey.. Let's login</h1>
                  <h1 className="text-md text-white mt-4">
                    You can shear your knowledge with others and gain some
                    knowledge{" "}
                  </h1>
                </div>
                <div className="md:col-span-2 p-6 ">
                  <h1 className="text-2xl text-gray-700 ">Login</h1>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col mt-4">
                      <label className="text-sm text-gray-600">Username</label>
                      <input
                        className="py-2 px-2 border rounded-full border-gray-200"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-600">Password</label>
                      <input
                        className="py-2 px-2 border rounded-full border-gray-200"
                        name="password"
                        value={password}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <div className="flex justify-center">
                        <button
                          // type="submit"
                          // onClick={handleSubmit}
                          className="py-2 px-4  border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white text-gray-600 text-md"
                        >
                          Login
                        </button>
                      </div>
                      <div className="flex justify-center mt-2">
                        <Link to="/register" className="text-sm text-red-500">
                          Create an account....
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
