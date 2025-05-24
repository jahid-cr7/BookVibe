import React from "react";
import { Link } from "react-router";
import ErrorBG from "../../assets/Untitled design.png"
const ErrorPage = () => {
  return (
    <div className="text-center py-10">
      <h1 className="lg:text-8xl md:text-6xl text-4xl mb-5 ">404</h1>
      <h2 className="lg:text-4xl md:text-2xl text-xl mb-4">Page Not Found ⚠️</h2>
      <p className="lg:text-2xl md:text-xl mb-4 text-xl">We Couldn't Find the Page you are Looking for</p>
        <Link className="btn bg-indigo-600 hover:bg-blue-500 " to={'/'}>Back To Home</Link>
        <img className="lg:w-[30%] md:w-[40%] w-[60%] mx-auto" src={ErrorBG} alt="" />
    </div>
  );
};

export default ErrorPage;
