import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

// we will not be able to go to restaurants page, unless we login.
// Route guards

function App() {
  return <RouterProvider router={router} />;
}

export default App;
