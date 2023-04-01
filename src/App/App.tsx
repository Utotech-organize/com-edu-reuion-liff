import { useEffect, useState } from "react";
import liff from "@line/liff";
import "../Static/App.css";
import Homepage from "./home/home";
import ReserveTablePage from "./table/reserve-table";

import Mockup from "../assets/mockup-tables.json";

import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import ReserveChairPage from "./chair/reserve-chair";
import RegisterPage from "./register/register";
import CheckPhoneNumberPage from "./check-phone-number/check-phone-number";
import DetailReservePage from "./detail-reserve/detail-reserve";
import CompletePage from "./complete/complete";
import CheckInfoPage from "./check-info/check-info";
import ReplyInfoPage from "./reply-info/reply-info";
import ReplyInfoEmptyPage from "./reply-info-empty/reply-info-empty";

const ErrorPage = () => {
  const error = useRouteError();
  return <div id="error-page"></div>;
};
const AppLayout = () => {
  return <Outlet />;
};

export default function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

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
          path: "reserveTable",

          element: <ReserveTablePage />,
        },
        {
          path: "reserveChair/:id",

          element: <ReserveChairPage />,
        },
        {
          path: "register",
          element: <RegisterPage></RegisterPage>,
        },
        {
          path: "phoneNumber",
          element: <CheckPhoneNumberPage></CheckPhoneNumberPage>,
        },
        {
          path: "detailReserve",
          element: <DetailReservePage></DetailReservePage>,
        },
        {
          path: "completePay",
          element: <CompletePage></CompletePage>,
        },
        {
          path: "check-info",
          element: <CheckInfoPage></CheckInfoPage>,
        },
        {
          path: "reply-info",
          element: <ReplyInfoPage></ReplyInfoPage>,
        },
        {
          path: "reply-info-empty",
          element: <ReplyInfoEmptyPage></ReplyInfoEmptyPage>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
