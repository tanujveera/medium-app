import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EmailSignIn = () => {
  const loginState = useSelector((store)=>store.header.isEmail)
  const dispatch = useDispatch();
  return (
    <div className="">
      <section className="">
        <div className="">
          <Link to="/">
            <p className="hover:cursor-pointer font-bold float-end">X</p>
          </Link>
          <div className="pt-24 text-3xl font-serif pb-16">
            {loginState?"Sign in":"Sign up"} with Email
          </div>
          {/* <p className="pb-10 w-60">Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p> */}
        </div>
        <div>
          <div className="pb-4">
            <p className="text-lg font-serif">Email</p>
            <input type="email" className="border border-black rounded-md px-2 py-1"/>
          </div>
          <div className="pb-4">
            <p className="text-lg font-serif">Password</p>
            <input type="password" className="border border-black rounded-md px-2 py-1"/>
          </div>
          <div>
            <button className="border border-black text-white bg-black px-16 py-1 rounded-full">{loginState?"Sign in":"Sign up"}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailSignIn;
