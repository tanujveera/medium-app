import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing page/LandingPage";
import About from "./components/About/About";
import SignIn from "./components/Auth/SignIn";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import SignUpCard from "./components/Auth/SignUpCard";
import SignInCard from "./components/Auth/SignInCard";
import EmailSignIn from "./components/Auth/EmailSignIn";
import HomePage from "./components/Home Page/HomePage";
import TextEditorPage from "./components/New Story/TextEditorPage";


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
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/email",
        element: <EmailSignIn />,
      },
      {
        path: "/signup",
        element: <SignUpCard />,
      },
      {
        path: "/signin",
        element: <SignInCard />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },{
        path:"/new-story",
        element:<TextEditorPage/>
      }
    ],
  },
]);

export default App;
