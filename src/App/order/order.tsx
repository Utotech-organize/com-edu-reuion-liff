import { Button, Form, Input, List, Row, Typography } from "antd";
import Appbar from "../../components/appbar";

import { AppstoreAddOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function OrdersPage() {
  const lineName = "P2W";

  const cart = localStorage.getItem("cart");
  const currentCart = cart ? JSON.parse(cart) : [];

  const onFinish = async (v: any) => {
    try {
    } catch (error) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Appbar />

      <div className="app-layout">
        <Form
          name="basic"
          style={{ width: "100%", marginTop: "50px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row justify="space-between">
            <Link to="/products">
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
              >
                <AppstoreAddOutlined style={{ fontSize: "30px" }} />
              </div>
            </Link>

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
              name="slug"
              rules={[{ required: false }]}
              style={{
                textAlign: "center",
              }}
            >
              <Input size="large" placeholder="กรุณากรอก โต๊ะของคุณ !!" />
            </Form.Item>
          </div>
          <List
            size="small"
            style={{ marginTop: "30px" }}
            dataSource={currentCart}
            renderItem={(data: any) => (
              <List.Item>
                <div style={{ width: "100%", backgroundColor: "white" }}>
                  <Row justify="space-around" align="middle">
                    <div style={{}}>
                      <Typography className="black-text">
                        {data.label}
                      </Typography>
                    </div>
                    <Typography className="black-text">1</Typography>
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
              name="slug"
              rules={[{ required: false }]}
              style={{
                textAlign: "center",
              }}
            >
              <Input.TextArea size="large" placeholder="หมายเหตุ" />
            </Form.Item>
          </div>

          <div>
            <Form.Item>
              <Button
                shape="round"
                htmlType="submit"
                style={{ width: "60%", height: "50px" }}
              >
                <Typography className="black-text">ยืนยัน</Typography>
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
