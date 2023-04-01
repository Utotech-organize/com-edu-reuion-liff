import {
  Button,
  Card,
  Checkbox,
  Form,
  Image,
  Input,
  Row,
  Typography,
} from "antd";

import React from "react";
import { Link } from "react-router-dom";
import Appbar from "../../components/appbar";

import Giraffe from "../../Static/images/Giraffe.png";

export default function RegisterPage() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Appbar></Appbar>
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          ข้อมูลผู้จองโต๊ะ
        </Typography>
        <Typography
          className="white-text"
          style={{ marginTop: "27px", textAlign: "start" }}
        >
          กรอกข้อมูลส่วนตัว
        </Typography>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="wordpass"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* <div>
          <Typography
            className="white-text"
            style={{
              marginTop: "27px",
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            ชื่อ-นามสกุล
          </Typography>
          <Input className="normal-text" placeholder="กรุณากรอกชื่อ-นามสกุล" />;
        </div>
        <div>
          <Typography
            className="white-text"
            style={{
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            เบอร์โทรศัพท์
          </Typography>
          <Input className="normal-text" placeholder="กรุณากรอกเบอร์โทรศัพท์" />
          ;
        </div>
        <div>
          <Typography
            className="white-text"
            style={{
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            สถานที่ทำงาน
          </Typography>
          <Input className="normal-text" placeholder="กรุณากรอกสถานที่ทำงาน" />;
        </div>
        <div>
          <Typography
            className="white-text"
            style={{
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            อีเมล
          </Typography>
          <Input className="normal-text" placeholder="กรุณากรอกอีเมล" />;
        </div> */}
        <Row style={{ textAlign: "start" }}>
          <Image preview={false} width={80} src={Giraffe} />
          <div style={{ marginLeft: "10px" }}>
            <Typography className="yellow-text" style={{ fontSize: "14px" }}>
              Giffe Kun
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              กรอกข้อมูลให้เรียบร้อยแล้วค่อยกดยืนยันนะฮัฟ
            </Typography>
          </div>
        </Row>
        <div>
          <Link to="/check-info">
            <Button
              shape="round"
              style={{
                width: "60%",
                height: "50px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              <Typography className="black-text">ยืนยัน</Typography>
            </Button>
          </Link>
          <Link to="/reserveTable">
            <Button
              shape="round"
              style={{
                width: "60%",
                height: "50px",

                marginBottom: "50px",
              }}
            >
              <Typography className="black-text">ย้อนกลับ</Typography>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
