import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing page/LandingPage";
import About from "./components/About/About";
import Membership from "./components/Membership/Membership";
import SignIn from "./components/Auth/SignIn";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import SignUpCard from "./components/Auth/SignUpCard";
import SignInCard from "./components/Auth/SignInCard";
import EmailSignIn from "./components/Auth/EmailSignIn";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Outlet />
      </Provider>
    </div>
  );
}

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },{
        path:"/email",
        element:<EmailSignIn/>
      },
      {
        path:"/signup",
        element:<SignUpCard/>
      },{
        path:"/signin",
        element:<SignInCard/>
      }
    ],
  },
]);

export default App;
