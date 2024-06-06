import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing page/LandingPage";
import About from "./components/About/About";
import Membership from "./components/Membership/Membership";

function App() {
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
    ],
  },
]);

export default App;
