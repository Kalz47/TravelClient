import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { registerUser } from "../../actions/auth";
import { useDispatch } from "react-redux";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords not match");
    } else {
      try {
        dispatch(registerUser(formData));
        console.log("Success");
        history.push("/");
      } catch (err) {
        console.log(err);
      }
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
                <div className="md:col-span-1 md:border-r border-gray-200 border-r-0 p-6 rounded-t-md bg-gradient-to-r   from-pink-500 to-red-500 ">
                  <h1 className="text-xl text-white">Hey.. Let's Register</h1>
                  <h1 className="text-md text-white mt-4">
                    You can shear your knowledge with others and gain some
                    knowledge{" "}
                  </h1>
                </div>
                <div className="md:col-span-2 p-6 ">
                  <h1 className="text-2xl text-gray-700 ">Register</h1>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col mt-4">
                      <label className="text-sm text-gray-600">
                        First Name
                      </label>
                      <input className="py-2 px-2 border rounded-md border-gray-200  " />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label className="text-sm text-gray-600">Last Name</label>
                      <input className="py-2 px-2 border rounded-md border-gray-200  " />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label className="text-sm text-gray-600">Email</label>
                      <input
                        className="py-2 px-2 border rounded-md border-gray-200  "
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-600">Password</label>
                      <input
                        className="py-2 px-2 border rounded-md border-gray-200  "
                        name="password"
                        value={password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-600">
                        Confirm Password
                      </label>
                      <input
                        className="py-2 px-2 border rounded-md border-gray-200  "
                        name="password2"
                        value={password2}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-600">Location</label>
                      <input className="py-2 px-2 border rounded-md border-gray-200  " />
                    </div>
                    <div>
                      <div className="flex justify-center">
                        <button className="py-2 px-4 border border-red-300 rounded-md  bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-red-500 text-pink-500  text-md ">
                          Register
                        </button>
                      </div>
                      <div className="flex justify-center mt-2">
                        <Link to="/login" className="text-sm text-red-500">
                          Alreday regidterd{" "}
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

export default Register;
