import { Children, useEffect } from "react";
import Homepage from "./home/home";
import ReserveTablePage, { DesksIndexLoader } from "./table/reserve-table";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation,
} from "react-router-dom";
import ReserveChairPage, { ChairWithDeskLoader } from "./chair/reserve-chair";
import RegisterPage from "./register/register";
import DetailReservePage, {
  ChairWithDeskLoaderInDetail,
} from "./detail-reserve/detail-reserve";

import ReplyInfoPage, { AllBookingLoader } from "./reply-info/reply-info";
import ErrorPage from "./error/error";

import { initLIFF } from "../config/liff";
import LoadingPage from "../components/loading";
import OrderPage, { ProductIndexLoader } from "./order/order";
import SingleReplyInfoPage, {
  SingleReplyLoader,
} from "./single-reply-info/single-reply-info";
import GetTicketPage, { GetTicketLoader } from "./get-ticket/get-ticket";
import { Spin } from "antd";
import CartPage from "./order/cart";

const AppLayout = () => {
  const { state } = useNavigation();
  useEffect(() => {
    initLIFF();
  }, []);

  return (
    <Spin spinning={state == "loading" || state == "submitting"}>
      <Outlet />
    </Spin>
  );
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
          path: "reply-info",
          loader: AllBookingLoader,
          element: <ReplyInfoPage />,
        },
        {
          path: "single-reply-info/:id",
          loader: SingleReplyLoader,
          element: <SingleReplyInfoPage />,
        },
        {
          path: "get-ticket",
          loader: GetTicketLoader,
          element: <GetTicketPage />,
        },
        { path: "order", element: <OrderPage />, loader: ProductIndexLoader },
        { path: "cart", element: <CartPage /> },
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
