import React from "react";

import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";
import { useSelector } from "react-redux";

const SignIn = () => {
  const loginStore = useSelector((store) => store.header.isSignin);

  return <div>{loginStore ? <SignInCard /> : <SignUpCard />}</div>;
};

export default SignIn;
