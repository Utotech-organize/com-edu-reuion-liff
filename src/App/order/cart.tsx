import {
  Avatar,
  Button,
  Form,
  Image,
  Input,
  List,
  Row,
  Typography,
} from "antd";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AppstoreAddOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import Appbar from "../../components/appbar";
import { getMe } from "../../config/liff";

import * as API from "../API";

export async function CartIndexLoader({ request, params }: any) {
  try {
    const data = await getMe();

    return {
      data: data?.user.data,
    };
  } catch (e: any) {
    return { products: [], data: null };
  }
}

export default function CartPage() {
  const { data } = useLoaderData() as any;

  const lineName = data.last_name;
  const lineLiffId = data.line_liff_id;
  const linePhoto = data.line_photo_url;

  const cart = localStorage.getItem("cart");
  const currentCart = cart ? JSON.parse(cart) : [];
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      Swal.fire({
        title: "ต้องการที่จะสั่งอาหาร กรุณากดยืนยันเลยฮัฟ",
        backdrop: false,
        width: "300px",
        background: "#4D5667",
        position: "center",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "red",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const payload = {
            ...values,
            line_liff_id: lineLiffId,
            products: currentCart.map((d: any) => {
              return { id: d.id, quantity: d.quantity };
            }),
          };
          const { data } = await API.createOrder(payload);

          Swal.fire({
            position: "center",
            backdrop: false,
            width: "300px",
            background: "#4D5667",
            icon: "success",
            title: "สั่งอาหารสำเร็จ กรุณารออาหารสักครู่นะฮัฟ",
            showConfirmButton: false,
            timer: 1800,
          });

          navigate(`/products`);
          localStorage.removeItem("cart");
        }
      });
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  React.useEffect(() => {
    if (currentCart && !currentCart.length) {
      navigate("/products");
    }
  }, []);

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
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          disabled={loading}
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
              <AppstoreAddOutlined style={{ fontSize: "30px" }} />
            </div>

            <Row align="middle">
              <Typography className="black-text"> {lineName}</Typography>
              <Avatar src={linePhoto} size="large" />
            </Row>
          </Row>

          <Typography className="white-header" style={{ marginBottom: "20px" }}>
            ของที่เลือก
          </Typography>
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <Typography
              className="white-text"
              style={{
                marginTop: "27px",
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              โต๊ะ
            </Typography>
            <Form.Item
              name="desk_label"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกหมายเลขโต๊ะของท่าน",
                },
              ]}
              style={{
                textAlign: "center",
              }}
            >
              <Input size="large" placeholder="กรุณากรอก โต๊ะของคุณ !!" />
            </Form.Item>
          </div>
          <List
            size="small"
            style={{ marginTop: "30px", height: "40vh", overflow: "auto" }}
            dataSource={currentCart}
            renderItem={(data: any) => (
              <List.Item>
                <div style={{ width: "100%", backgroundColor: "white" }}>
                  <Row
                    justify="space-between"
                    align="middle"
                    style={{ padding: "10px" }}
                  >
                    <Image src={data.image} style={{ maxWidth: "80px" }} />
                    <Typography className="black-text">{data.label}</Typography>
                    <Typography className="black-text">
                      {data.quantity}
                    </Typography>
                  </Row>
                </div>
              </List.Item>
            )}
          />
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <Typography
              className="white-text"
              style={{
                marginTop: "27px",
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              Remark
            </Typography>
            <Form.Item
              name="remark"
              rules={[{ required: false }]}
              style={{
                textAlign: "center",
              }}
            >
              <Input.TextArea size="large" placeholder="หมายเหตุ" />
            </Form.Item>
          </div>

          <div
            className="footer-order"
            style={{ display: "flex", flexDirection: "row", columnGap: 12 }}
          >
            <Button shape="round" block>
              <Link to="/products">
                <Typography className="black-text">แก้ไข</Typography>
              </Link>
            </Button>
            <Button block shape="round" htmlType="submit" loading={loading}>
              <Typography className="black-text">ยืนยัน</Typography>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
