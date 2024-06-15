import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import back from "../../assets/back.svg";

const EmailSignIn = () => {
  const loginState = useSelector((store) => store.header.isLogin);
  console.log(loginState)
  const dispatch = useDispatch();
  const handleBackClick = () => {
    dispatch(loginState(true))
  }
  return (
    <div className="flex justify-center">
      <section className="w-[600px] place-content-center mx-10 h-screen">
        <div className="">
          <Link to="/signin">
            <img
              src={back}
              alt="back"
              className=" w-6"
              onClick={handleBackClick}
            />
          </Link>
          <Link to="/">
            <p className="hover:cursor-pointer font-bold float-end pr-4">X</p>
          </Link>
          <div className="text-3xl font-serif px-24">
            {loginState ? "Sign in" : "Sign up"} with Email
          </div>
          {/* <p className="pb-10 w-60">Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p> */}
        </div>
        <div className="pt-16 mx-28">
         {!loginState && (<div className="pb-4">
            <p className="text-lg font-serif">Name</p>
            <input
              type="text"
              className="border border-black rounded-md px-2 py-1"
            />
          </div>)}
          <div className="pb-4">
            <p className="text-lg font-serif">Email</p>
            <input
              type="email"
              className="border border-black rounded-md px-2 py-1 place-items-center"
            />
          </div>
          <div className="pb-4">
            <p className="text-lg font-serif">Password</p>
            <input
              type="password"
              className="border border-black rounded-md px-2 py-1"
            />
          </div>
          <div className="">
            <button className="border border-black text-white bg-black px-16 py-1 rounded-full">
              {loginState ? "Sign in" : "Sign up"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailSignIn;
