import {
  Button,
  Card,
  Checkbox,
  Form,
  Image,
  Input,
  Row,
  Spin,
  Typography,
} from "antd";

import React from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Appbar from "../../components/appbar";

import Giraffe from "../../Static/images/Giraffe.png";

import * as API from "../API";

export default function RegisterPage() {
  const { state } = useNavigation();
  const location = useLocation();

  const navigate = useNavigate();

  const onFinish = async (v: any) => {
    const lineProfile = localStorage.getItem("line_profile") as any;

    const profileData = JSON.parse(lineProfile);
    const values = {
      line_liff_id: profileData.userId,
      line_display_name: profileData.displayName,
      line_photo_url: profileData.pictureUrl,
      channel: "line",
      ...v,
    };

    try {
      const res = await API.createCustomers(values);

      navigate("/reply-info");
    } catch (e: any) {
      console.log(e);

      return { error: e.response.data.message };
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Spin spinning={state == "loading" || state == "submitting"}>
      <div style={{}}>
        <Appbar />
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
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            style={{ width: "100%" }}
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
              ชื่อ
            </Typography>
            <Form.Item
              name="first_name"
              rules={[{ required: true, message: "กรุณากรอกชื่อ !" }]}
            >
              <Input placeholder="ยีราฟคุง" />
            </Form.Item>
            <Typography
              className="white-text"
              style={{
                marginTop: "27px",
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              นามสกุล
            </Typography>
            <Form.Item
              name="last_name"
              rules={[{ required: true, message: "กรุณากรอกนามสกุล !" }]}
            >
              <Input placeholder="ภาคคอม" />
            </Form.Item>

            <Typography
              className="white-text"
              style={{
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              เบอร์โทรศัพท์
            </Typography>
            <Form.Item
              name="tel"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกเพียงตัวเลข เบอร์โทรศัพท์ !",
                  pattern: new RegExp(/^[0-9]+$/),
                },
              ]}
            >
              <Input
                maxLength={10}
                placeholder="ใส่เพียงตัวเลขเท่านั้น เช่น 081234xxxx "
              />
            </Form.Item>
            <Typography
              className="white-text"
              style={{
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              รุ่น
            </Typography>
            <Form.Item
              name="generation"
              rules={[{ required: true, message: "กรุณากรอกรุ่นของท่าน !" }]}
            >
              <Input placeholder="รุ่นตามด้วยเลข เช่น TCT#32, CED#10 ใส่ # ด้วยนะค้าบ" />
            </Form.Item>
            <Typography
              className="white-text"
              style={{
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              สถานที่ทำงาน
            </Typography>
            <Form.Item
              name="information"
              rules={[{ required: true, message: "กรุณากรอกสถานที่ทำงาน !" }]}
            >
              <Input placeholder="ภาควิชาคอมพิวเตอร์ศึกษา, กำลังศึกษา" />
            </Form.Item>

            <Typography
              className="white-text"
              style={{
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              อีเมล
            </Typography>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอก e-mail !",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="comedu@comedu.co" />
            </Form.Item>
            <Row style={{ textAlign: "start", marginTop: "50px" }}>
              <Image preview={false} width={80} src={Giraffe} />
              <div style={{ marginLeft: "10px" }}>
                <Typography
                  className="yellow-text"
                  style={{ fontSize: "14px" }}
                >
                  Giraffe Kung
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
              <Form.Item>
                <Button
                  shape="round"
                  htmlType="submit"
                  style={{ width: "60%", height: "50px" }}
                >
                  <Typography className="black-text">ยืนยัน</Typography>
                </Button>
              </Form.Item>

              <Link to="/reserve-table">
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
          </Form>
        </div>
      </div>
    </Spin>
  );
}
