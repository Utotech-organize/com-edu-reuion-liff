import { useEffect, useState } from "react";
import liff from "@line/liff";
import "../Static/App.css";
import Homepage from "./home/home";
import ReserveTablePage, { DesksIndexLoader } from "./table/reserve-table";

import Mockup from "../assets/mockup-tables.json";

import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import ReserveChairPage, { ChairWithDeskLoader } from "./chair/reserve-chair";
import RegisterPage from "./register/register";
import DetailReservePage, {
  ChairWithDeskLoaderInDetail,
} from "./detail-reserve/detail-reserve";

import CheckInfoPage from "./check-info/check-info";
import ReplyInfoPage from "./reply-info/reply-info";
import ErrorPage from "./error/error";

import * as API from "./API";
import { initLIFF } from "../config/liff";

const AppLayout = () => {
  useEffect(() => {
    initLIFF();
  }, []);

  return <Outlet />;
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "check-info",
          element: <CheckInfoPage />,
        },
        {
          path: "reserve-table",
          loader: DesksIndexLoader,
          element: <ReserveTablePage />,
        },
        {
          path: "reserve-chair/:id",
          loader: ChairWithDeskLoader,
          element: <ReserveChairPage />,
        },

        {
          path: "detail-reserve/:id",
          loader: ChairWithDeskLoaderInDetail,
          element: <DetailReservePage></DetailReservePage>,
        },

        {
          path: "reply-info",
          element: <ReplyInfoPage></ReplyInfoPage>,
        },

        { path: "error", element: <ErrorPage /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

// test commit cz
