import React from "react";
import { Avatar, Button, Image, Row, Typography } from "antd";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

import Appbar from "../../components/appbar";
import { getMe } from "../../config/liff";
import * as API from "../API";

export async function ProductIndexLoader({ request, params }: any) {
  try {
    const data = await getMe();
    const products = await API.getAllProduct();

    return {
      products: products.data.data,
      data: data?.user.data,
    };
  } catch (e: any) {
    return { products: [], data: null };
  }
}

export default function ProductPage() {
  const { data, products } = useLoaderData() as any;
  const navigate = useNavigate();
  const lineName = data.last_name;
  const linePhoto = data.line_photo_url;

  const cart = localStorage.getItem("cart");
  const currentCart = cart ? JSON.parse(cart) : [];
  const currentCartPId =
    currentCart && currentCart.length ? currentCart.map((d: any) => d.id) : [];
  const currentProduct =
    products && products.length
      ? products
          .map((d: any) => {
            return {
              ...d,
              quantity: 0,
            };
          })
          .filter((c: any) => currentCartPId.indexOf(c.id) === -1)
      : [];

  const [allProduct, setAllProduct] = React.useState([
    ...currentCart,
    ...currentProduct,
  ]);

  const onConfirm = () => {
    localStorage.setItem(
      "cart",
      JSON.stringify(allProduct.filter((d: any) => d.quantity > 0))
    );
    navigate("/cart");
  };

  const handleAddProduct = (index: any) => {
    setAllProduct((prev: any) => {
      const d = JSON.parse(JSON.stringify(prev));
      d[index].quantity += 1;
      return [...d];
    });
  };

  const handleDeleteProduct = (index: any) => {
    setAllProduct((prev: any) => {
      const d = JSON.parse(JSON.stringify(prev));
      d[index].quantity -= 1;
      return [...d];
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Appbar />

      <div
        className="app-layout"
        style={{ minHeight: "calc(100vh - 50px)", overflow: "auto" }}
      >
        <Row justify="space-between">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "grey",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {}}
          >
            <ShoppingCartOutlined style={{ fontSize: "30px" }} />
          </div>

          <Row align="middle">
            <Typography className="black-text"> {lineName}</Typography>
            <Avatar src={linePhoto} size="large" />
          </Row>
        </Row>

        <Typography className="white-header" style={{ marginBottom: "20px" }}>
          สั่งของในงาน
        </Typography>
        <div
          className="grid-container-order"
          style={{
            maxHeight: "70vh",
          }}
        >
          {allProduct.map((d: any, index: any) => (
            <div
              key={`product-${d.id}`}
              className="grid-item"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                margin: "10px",
                border: `3px solid  ${d.quantity > 0 ? "red" : "white"}`,
              }}
              onClick={() => {}}
            >
              <Image preview={false} key={d.id} src={d.image}></Image>

              <Row justify="space-around" style={{ padding: "12px" }}>
                <Typography className="black-sm-text">{d.label}</Typography>
                <Typography className="black-sm-text">{d.price} บาท</Typography>
              </Row>
              <Row justify="space-between" align="middle">
                <Button
                  disabled={d.quantity === 0}
                  onClick={(e) => handleDeleteProduct(index)}
                >
                  -
                </Button>
                <Typography>{d.quantity}</Typography>
                <Button onClick={(e) => handleAddProduct(index)}>+</Button>
              </Row>
            </div>
          ))}
        </div>
        <div className="footer-order">
          <Button
            shape="round"
            htmlType="submit"
            style={{ width: "60%", height: "50px" }}
            onClick={onConfirm}
          >
            <Typography className="black-text">ยืนยัน</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}
