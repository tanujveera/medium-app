import React, { useEffect ,lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import SignIn from "./components/Auth/SignIn";
import SignUpCard from "./components/Auth/SignUpCard";
import SignInCard from "./components/Auth/SignInCard";
import EmailSignIn from "./components/Auth/EmailSignIn";
import Error from "./utils/Error"
import { useDispatch } from "react-redux";
import { checkAuthStatus } from "./redux/authSlice";
import ProtectedRoute from "./utils/protectedRoute";
import BlogPost from "./components/BlogPost/BlogPost";

const HomePageComp = lazy(() => import("./components/HomePage/HomePage"));
const TextEditorPage = lazy(() =>
  import("./components/NewStory/TextEditorPage")
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthStatus());
    const intervalId = setInterval(() => {
      dispatch(checkAuthStatus());
    }, 10000); // Check every 5 seconds

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement:<Error/>,
    children: [
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
        path: "/app",
        element: <ProtectedRoute />,
        errorElement:<Error/>,
        children: [
          {
            path: "home",
            element: (
              <Suspense fallback={<h2>Loading....</h2>}>
                <HomePageComp />
              </Suspense>
            ),
          },
          {
            path: "new-story",
            element: (
              <Suspense fallback={<h2>Loading....</h2>}>
                <TextEditorPage />
              </Suspense>
            ),
          },
          {
            path:"post/:id",
            element:(
              <Suspense fallback={<h2>Loading....</h2>}>
                <BlogPost />
              </Suspense>
            ),
          },
        ],
      },
      {
        path:"/error",
        element:<Error/>,
      },
    ],
  },
]);

export default App;
