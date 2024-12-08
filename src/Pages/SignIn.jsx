import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; // Import toast functions
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {

   const{signInUser, setUser} = useContext(AuthContext);

   const location = useLocation();
   console.log(location);

   const navigate = useNavigate();

   const [errorMessage, setErrorMessage] = useState(null);

    const {theme} = useTheme();


    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user ={email,password};
        console.log(user);
 
        //signInUser
        signInUser(email,password)
        .then(result =>{
          const user = result.user;
          setUser(user);
          if(result.user?.uid){
            Swal.fire({
              icon: "success",
              title: "Login Successful!",
              text: `Welcome, ${user.email}!`,
              confirmButtonText: "OK",
            }).then(()=>{
              const from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            })
          }
          
        })
        .catch((err)=>{
          const errorCode = err.code;
          // const errorMessage = err.message;
          console.log('Error',err);
          if (errorCode === "auth/invalid-credential") {
            setErrorMessage("The provided credentials are invalid. Please try again.");
          }
          else if(errorCode ==="auth/wrong-password"){
            setErrorMessage("The password is incorrect. Please try again.");
          }
          else if(errorCode ==="auth/user-not-found"){
            setErrorMessage("The password is incorrect. Please try again");
          }
          else {
            setErrorMessage("An error occurred. Please try again.");
          }
        })


    }
    return (
        <div className={`min-h-screen flex justify-center items-center`}>
      <div className={`card border-l-4  w-full max-w-lg shrink-0 shadow-2xl p-10 ${theme === "light" ? "bg-slate-100" : "bg-gray-800"} ${theme === "light" ? "border-violet-500" : "border-rose-300"}`}>
        <h2 className={`font-semibold text-2xl text-center mt-5 ${theme === "light" ? "text-indigo-900" : "text-rose-200"} `}>Login Your Account</h2>
        <form onSubmit={handleSignIn} className="card-body">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 ">Login</button>
          </div>
          {
              errorMessage && <p className="p-2 mt-2 font-semibold bg-red-300 text-red-700">{errorMessage}</p>
          }
        </form>
        <button type="button" className="btn text-indigo-900 bg-indigo-200 mb-4 "><FaGoogle></FaGoogle> Login With Google</button>
        <p className="text-center text-gray-500 font-semibold">Don't Have a account? <Link className={`${theme === "light" ? "text-indigo-900" : "text-rose-200"}`} to="/signup">Register</Link> </p>
      </div>
    </div>

    );
};

export default SignIn;