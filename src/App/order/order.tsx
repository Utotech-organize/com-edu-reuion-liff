import { Button, Card, Form, Image, Input, List, Row, Typography } from "antd";
import Appbar from "../../components/appbar";
import Giraffe from "../../Static/images/Giraffe.png";
import { ShoppingCartOutlined } from "@ant-design/icons";

import * as API from "../API";
import { getMe } from "../../config/liff";
import { useLoaderData } from "react-router-dom";

export async function ProductIndexLoader({ request, params }: any) {
  try {
    const data = await getMe();
    const products = await API.getAllProduct();
    // console.log({ data });

    return { products: products.data.data, data: data?.user.data };
  } catch (e: any) {
    return { data: null };
  }
}


export default function OrderPage() {
  const { data, products } = useLoaderData() as any;
  const lineName = "P2W";

  // console.log("-----------");

  console.log({ products });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        marginBottom: "50px",
      }}
    >
      <Appbar />

      <div className="app-layout">
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
            <div
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "10px",
                backgroundColor: "grey",
                borderRadius: "30px",
              }}
            ></div>
          </Row>
        </Row>

        <Typography className="white-header" style={{ marginBottom: "20px" }}>
          สั่งของในงาน
        </Typography>
        <div className="grid-container-order">
          {products.map((d: any) => (
            <div
              className="grid-item"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                margin: "10px",
              }}
              onClick={() => {}}
            >
              <Image preview={false} key={d.id} src={d.image}></Image>

              <Row justify="space-around">
                <Typography className="black-sm-text">{d.label}</Typography>
                <Typography className="black-sm-text">{d.price} บาท</Typography>
              </Row>
              <Row justify="space-between" align="middle">
                <Button>-</Button>
                <Typography>0</Typography>
                <Button>+</Button>
              </Row>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
