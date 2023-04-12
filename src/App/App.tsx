import { useEffect } from "react";
import "../Static/App.css";
import Homepage from "./home/home";
import ReserveTablePage, { DesksIndexLoader } from "./table/reserve-table";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReserveChairPage, { ChairWithDeskLoader } from "./chair/reserve-chair";
import RegisterPage from "./register/register";
import DetailReservePage, {
  ChairWithDeskLoaderInDetail,
} from "./detail-reserve/detail-reserve";

import ReplyInfoPage, { AllBookingLoader } from "./reply-info/reply-info";
import ErrorPage from "./error/error";

import { initLIFF } from "../config/liff";
import LoadingPage from "../components/loading";
import OrderPage from "./order/order";
import SingleReplyInfoPage, {
  SingleReplyLoader,
} from "./single-reply-info/single-reply-info";

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
          element: <DetailReservePage />,
        },

        {
          path: "reply-info/:id",
          loader: AllBookingLoader,
          element: <ReplyInfoPage />,
        },
        {
          path: "single-reply-info/:id",
          loader: SingleReplyLoader,
          element: <SingleReplyInfoPage />,
        },
        { path: "order", element: <OrderPage /> },
        { path: "loading", element: <LoadingPage /> },
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
