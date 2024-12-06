import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const SignIn = () => {
    const {theme} = useTheme();
    return (
        <div className={`min-h-screen flex justify-center items-center`}>
      <div className={`card border-l-4  w-full max-w-lg shrink-0 shadow-2xl p-10 ${theme === "light" ? "bg-pink-50" : "bg-gray-800"} ${theme === "light" ? "border-violet-500" : "border-rose-300"}`}>
        <h2 className={`font-semibold text-2xl text-center mt-5 ${theme === "light" ? "text-indigo-900" : "text-rose-200"} `}>Login Your Account</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 ">Login</button>
          </div>
        </form>
        <p className="text-center text-gray-500 font-semibold">Don't Have a account? <Link className={`${theme === "light" ? "text-indigo-900" : "text-rose-200"}`} to="/signup">Register</Link> </p>
      </div>
    </div>

    );
};

export default SignIn;