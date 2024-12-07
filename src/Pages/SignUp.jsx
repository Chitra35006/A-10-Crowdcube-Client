import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const {theme} = useTheme();

    const {createUser,setUser} = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState(null);

    const [showPassword,setShowPassword] = useState(false);




    const handleSignUp =(e) =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photoUrl = form.photoUrl.value;
      const password = form.password.value;
      const user ={name,email,photoUrl,password};
      console.log(user);

      //validation
      setErrorMessage('');
      if(password.length < 6){
        setErrorMessage('Must be at least 6 characters long');
        return;
      }
      
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
      if(!passwordRegex.test(password)){
        setErrorMessage('include at least one uppercase and one lowercase letter')
        return;
      }

      //createUser
      createUser(email,password)
      .then(result =>{
        // console.log(result.user);
        setUser(user);
        console.log(user);
        if(result.user?.uid){
          Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: `Welcome, ${user.email}!`,
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err)=>{
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode,errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          setErrorMessage("This email address is already in use. Please try logging in or use a different email for sign up.");
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      })
      
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className={`card border-l-4 border-violet-500 w-full max-w-lg shrink-0 shadow-2xl p-10 ${theme === "light" ? "bg-slate-100" : "bg-gray-800"} ${theme === "light" ? "border-violet-500" : "border-rose-300"}`}>
          <h2 className={`font-semibold text-2xl text-center mt-5 ${theme === "light" ? "text-indigo-900" : "text-rose-200"} `}>
            Register Your Account
          </h2>
          <form onSubmit={handleSignUp} className="card-body">

            {/* Name */}
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Photo Url */}
          <div className="form-control">
              <label className="label">
                <span className="label-text">Photo UrL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter Your Photo UrL"
                className="input input-bordered"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
              onClick={()=>setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-4 top-12">
                {
                  showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
              </button>
              {
              errorMessage && <p className="p-2 mt-2 font-semibold bg-red-300 text-red-700">{errorMessage}</p>
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 ">Sign Up</button>
            </div>
          </form>
          <p className="text-center text-gray-500 font-semibold">
            Already Registered? Go to{" "}
            <Link className ={`${theme === "light" ? "text-indigo-900" : "text-rose-200"}`} to="/signin">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default SignUp;