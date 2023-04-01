import { Button, Form, Image, Input, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Appbar from "../../components/appbar";

import Giraffe from "../../Static/images/Giraffe.png";

export default function CheckPhoneNumberPage() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          ตรวจสอบข้อมูล & ชำระเงิน
        </Typography>
        <div>
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
            <Typography
              className="white-text"
              style={{
                marginTop: "27px",
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              ค้นหาข้อมูลการจองโต๊ะด้วยเบอร์โทรศัพท์
            </Typography>
            <Form.Item
              name="check-phone"
              rules={[{ required: true, message: "กรุณากรอกเบอร์โทรศัพท์ !" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                shape="round"
                htmlType="submit"
                style={{ width: "60%", height: "50px", right: "33%" }}
              >
                <Typography className="black-text">ยืนยัน</Typography>
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <Link to="/">
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
                พิมพ์หมายเลขโทรศัพท์ที่ได้ลงทะเบียน
              </Typography>
              <Typography
                className="white-text"
                style={{
                  fontSize: "14px",
                }}
              >
                จองโต๊ะ เพื่อตรวจสอบข้อมูลน๊ะฮัฟ
              </Typography>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}
