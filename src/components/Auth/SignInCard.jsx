import React from "react";
import { useDispatch } from "react-redux";
import { loginState } from "../../redux/headerStore";
import { signInOptions } from "../../utils/constants";
import { Link } from "react-router-dom";

const SignInCard = () => {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(loginState(false));
  };
  return (
    <div className=" w-[650px] bg-white shadow-2xl h-[700px] ml-[450px]">
      <div className=" px-11 py-8">
        <div className="">
          <Link to="/">
            <p className="hover:cursor-pointer font-bold float-end">X</p>
          </Link>
          <div className="flex justify-center text-3xl font-serif pb-16">
            Welcome back.
          </div>
        </div>

        {signInOptions.map((item) => (
          <div className="my-4" key={item.id}>
            <div className="flex w-72 rounded-full mx-auto border border-black px-2 py-2 text-base font-sans font-semibold text-[15px]">
              <img
                src={item.image}
                alt="Icon"
                className="w-6 rounded-full"
              />
              <div className="mx-auto">{item.text}</div>
            </div>
          </div>
        ))}
        <div className="flex justify-center pt-6 pb-12">
          <div>No account? &nbsp;</div>
          <button onClick={handleSignIn} className="text-green-800 font-bold">
            Create one
          </button>
        </div>
        <div className="text-xs text-gray-500 flex justify-center pb-10">
          <div className="pr-2">Forgot email or trouble signing in?</div>{" "}
          <a
            className="underline"
            href="https://help.medium.com/hc/en-us/requests/new?ticket_form_id=9455427953559&form=true&source=login--------------------------lo_home_nav-----------"
          >
            Get help.
          </a>
        </div>
        <div className="text-xs text-gray-500 flex justify-center">
          Click “Sign in” to agree to Medium’s{" "}
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

export default SignInCard;
