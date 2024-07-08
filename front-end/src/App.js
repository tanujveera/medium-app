import React, { useEffect } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing page/LandingPage";
import About from "./components/About/About";
import SignIn from "./components/Auth/SignIn";
// import { Provider } from "react-redux";
// import appStore from "./redux/appStore";
import SignUpCard from "./components/Auth/SignUpCard";
import SignInCard from "./components/Auth/SignInCard";
import EmailSignIn from "./components/Auth/EmailSignIn";
import HomePage from "./components/Home Page/HomePage";
import TextEditorPage from "./components/New Story/TextEditorPage";
import { useDispatch } from "react-redux";
import { checkAuthStatus } from "./redux/authSlice";
import ProtectedRoute from "./utils/protectedRoute";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkAuthStatus());
  //   const intervalId = setInterval(() => {
  //     dispatch(checkAuthStatus());
  //   }, 10000); // Check every 5 seconds

  //   return () => clearInterval(intervalId);
  // }, [dispatch]);

  return (
    <div className="App">
        <Outlet />
    </div>
  );
}

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/email",
        element: <EmailSignIn />,
      },
      {
        path: "/signin",
        element: <SignInCard />,
      },
      {
        path: "/signup",
        element: <SignUpCard />,
      },
      {
        path: "/app/home",
        element: <HomePage />,
      },
      {
        path: "/app/new-story",
        element: <TextEditorPage />,
      },
      // {
      //   path: "/",
      //   element: <ProtectedRoute />,
      //   children: [
      //     {
      //       path: "/home",
      //       element: <HomePage />,
      //     },
      //     {
      //       path: "/new-story",
      //       element: <TextEditorPage />,
      //     },
      //   ],
      // },
    ]
  },
  
]);

export default App;
