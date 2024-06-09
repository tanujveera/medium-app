import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginState } from "../../redux/headerStore";
import { signInOptions } from "../../utils/constants";

const SignIn = () => {
  const loginStore = useSelector((store) => store.header);
  const dispatch = useDispatch();
  return (
    <div className="mx-auto w-[650px] shadow-2xl h-[680px] mt-2">
      <div className="pt-12 text-3xl font-serif mx-[220px] pb-16">
        Welcome back.
      </div>
      {signInOptions.map((item) => (
        <div className="my-4" key={item.id}>
          <div className="flex w-72 rounded-full mx-auto border border-black px-2 py-2 text-base font-sans font-semibold text-[15px]">
            <img
              src={item.image}
              alt="Google Icon"
              className="w-6 rounded-full"
            />
            <div className="mx-auto">{item.text}</div>
          </div>
        </div>
      ))}
      <div className="flex mx-[240px] pt-6">
        <div>No account?</div>
        <button className="text-green-800 font-bold">Create one</button>
      </div>
      <div className="mx-auto text-sm text-gray-500">Forgot email or trouble signing in? <button>Get help.</button></div>
    </div>
  );
};

export default SignIn;
