import { Children, useEffect } from "react";
import Homepage from "./home/home";
import ReserveTablePage, { DesksIndexLoader } from "./table/reserve-table";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation,
  useLocation,
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
import { ProductIndexLoader } from "./order/products";
import SingleReplyInfoPage, {
  SingleReplyLoader,
} from "./single-reply-info/single-reply-info";
import GetTicketPage, { GetTicketLoader } from "./get-ticket/get-ticket";
import { Spin } from "antd";
import CartPage, { CartIndexLoader } from "./order/cart";
import ProductPage from "./order/products";

const AppLayout = () => {
  const location = useLocation();
  const { state } = useNavigation();

  //Auth with line
  useEffect(() => {
    if (location.pathname !== "/reserve-table") {
      initLIFF();
    }
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
        {
          path: "products",
          element: <ProductPage />,
          loader: ProductIndexLoader,
        },

        {
          path: "cart",
          element: <CartPage />,
          loader: CartIndexLoader,
        },
        {
          path: "orders",
          element: <ProductPage />,
          loader: ProductIndexLoader,
        },
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
