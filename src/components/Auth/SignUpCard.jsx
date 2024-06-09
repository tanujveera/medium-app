import React from "react";
import { useDispatch } from "react-redux";
import { loginModal, loginState } from "../../redux/headerStore";
import { signUpOptions } from "../../utils/constants";

const SignUpCard = () => {
  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(loginState(true));
  };
  const handleClick = () =>{
    console.log("button clicked")
    dispatch(loginModal())
    dispatch(loginState(true))
  }
  return (
    <div className="bg-white w-[650px] shadow-2xl h-[700px] ml-[450px]">
      <div className=" px-11 py-8">
        <div>
          <p onClick={handleClick} className="hover:cursor-pointer font-bold float-end">X</p>
          <div className="pt-24 text-3xl font-serif mx-[220px] pb-16">
            Join Medium.
          </div>
        </div>
        {signUpOptions.map((item) => (
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
        <div className="flex justify-center pt-6 pb-20">
          <div>Already have an account? &nbsp;</div>
          <button onClick={handleSignUp} className="text-green-800 font-bold">
            Sign in
          </button>
        </div>
        <div className="text-xs text-gray-500 flex justify-center">
          Click “Sign up” to agree to Medium’s{" "}
          <a
            href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f"
            className="underline"
          >
            &nbsp;Terms of Service&nbsp;
          </a>{" "}
          and acknowledge that
        </div>
        <div className="text-xs text-gray-500 flex justify-center">
          Medium’s &nbsp;
          <a
            href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9"
            className="underline"
          >
            Privacy Policy
          </a>
          &nbsp; applies to you.
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
