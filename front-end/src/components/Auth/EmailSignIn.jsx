import React, {useRef,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import back from "../../assets/back.svg";
import { loginState } from "../../redux/headerStore";
import { emailAuthSignIn, emailAuthSignUp } from "../../utils/auth/emailAuth";

const EmailSignIn = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const loginStore = useSelector((store) => store.header.isSignIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credError,setCredError] = useState(null);
  // const { isAuthenticated, loading } = useSelector((state) => state.auth);


  const handleEmailAuth = async() => {
    console.log(loginStore);
    if(loginStore){
      const response = await emailAuthSignIn(email.current.value, password.current.value);
      console.log(response);
      if(response.status === 200){
        setCredError(true)
        navigate("/home")
      }
    }
    if(!loginStore){
      console.log(loginStore);
      const response = await emailAuthSignUp(firstName.current.value,lastName.current.value, email.current.value, password.current.value);
      console.log(response);
      if(response.status === 411 || response.status === 401){
        setCredError(false)
        navigate("/email")
      }
    }
  }

  const handleBackClick = () => {
    dispatch(loginState(true))
    console.log("clicked back")
  }
  return (
    <div className="flex justify-center">
      <section className="w-[600px] place-content-center mx-10 h-screen">
        <div className="">
          <Link to="/login">
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
            {loginStore ? "Sign in" : "Sign up"} with Email
          </div>
          {/* <p className="pb-10 w-60">Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p> */}
        </div>
        <div className="pt-16 mx-28">
         {!loginStore && (<div className="pb-4">
            <p className="text-lg font-serif">First Name</p>
            <input
            ref={firstName}
              type="text"
              className="border border-black rounded-md px-2 py-1"
            />
            <p className="text-lg font-serif">Last Name</p>
            <input
            ref={lastName}
              type="text"
              className="border border-black rounded-md px-2 py-1"
            />
          </div>)}
          <div className="pb-4">
            <p className="text-lg font-serif">Email</p>
            <input
            ref={email}
              type="email"
              className="border border-black rounded-md px-2 py-1 place-items-center"
            />
          </div>
          <div className="pb-4">
            <p className="text-lg font-serif">Password</p>
            <input
            ref={password}
              type="password"
              className="border border-black rounded-md px-2 py-1"
            />
            {credError && (<p className="text-red-600">Check your credentials</p>)}
          </div>
          <div className="">
            <button className="border border-black text-white bg-black px-16 py-1 rounded-full" onClick={handleEmailAuth}>
              {loginStore ? "Sign in" : "Sign up"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailSignIn;
