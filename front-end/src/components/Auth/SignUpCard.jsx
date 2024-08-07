import React from "react";
import { useDispatch } from "react-redux";
import { loginState } from "../../redux/headerStore";
import { signUpOptions } from "../../utils/constants";
import { Link } from "react-router-dom";

const SignUpCard = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(loginState(true));
  };
  return (
    <div className="bg-white lg:w-[650px] shadow-2xl lg:h-[700px] lg:ml-[450px]">
      <div className=" px-11 py-8">
        <div>
          <Link to="/">
            <p className="hover:cursor-pointer font-bold float-end">X</p>
          </Link>
          <div className="pt-24 text-3xl font-serif mx-[180px] pb-16">
            Join Medium.
          </div>
        </div>
        {signUpOptions.map((item) => (
          <Link key={item.id} to={item.url}>
            <div className="my-4">
              <div className="flex w-72 rounded-full mx-auto border border-black px-2 py-2 text-base font-sans font-semibold text-[15px]">
                <img
                  src={item.image}
                  alt="Google Icon"
                  className="w-6 rounded-full"
                />
                <div className="mx-auto">{item.text}</div>
              </div>
            </div>
          </Link>
        ))}
        <div className="flex justify-center pt-6 pb-20">
          <div>Already have an account? &nbsp;</div>
          <button onClick={handleClick} className="text-green-800 font-bold">
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
