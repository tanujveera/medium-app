import React from "react";
import { useDispatch } from "react-redux";
import { loginModal } from "../../redux/headerStore";

const EmailSignIn = () => {
  const dispatch = useDispatch();
  const handleClick = () =>{
    dispatch(loginModal())
    // dispatch(loginState(true))
  }
  return (
    <div>
      <div className="">
        <p
          onClick={handleClick}
          className="hover:cursor-pointer font-bold float-end"
        >
          X
        </p>
        <div className="flex justify-center text-3xl font-serif pb-16">
          Welcome back.
        </div>
      </div>
    </div>
  );
};

export default EmailSignIn;
