import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./route/root";
import { ConfigProvider } from "antd";
import ErrorPage from "./components/errorPage";
import { Login } from "./components/auth/login";
import { Signup } from "./components/auth/signup";
import { RewardsHub } from "./components/rewards/rewardsTest";



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path:'/',
    element: 
        <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'rewards',
        element:<RewardsHub/>
      }
    ]
  },
 
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#9013FE",
        borderRadius: 8,
      },
    }}
  >
    <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
