import { Button, Form, Image, Input, Row, Typography } from "antd";
import { useLoaderData, useNavigate } from "react-router-dom";
import Appbar from "../../components/appbar";
import Giraffe from "../../Static/images/Giraffe.png";

import * as API from "../API";
import { getMe } from "../../config/liff";

//FIXME PHOOM
export async function GetTicketLoader({ request, params }: any) {
  try {
    const data = await getMe();

    return {
      data: data?.user.data,
    };
  } catch (e: any) {
    return { data: null };
  }
}

export default function GetTicketPage() {
  const navigate = useNavigate();

  //FIXME PHOOM
  const onFinish = (v: any) => {
    console.log(v);
    navigate(`/reply-info/${v.slug}`);
    console.log("in on finish");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Appbar />
      <div
        className="app-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography className="white-header">รับบัตรเข้างาน</Typography>
        <Typography className="white-sm-text " style={{ marginTop: "10px" }}>
          กรอกรหัส บัตรที่ได้จาก ทีมงาน เพื่อรับบัตรเข้างาน
        </Typography>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: "100%", marginTop: "50px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="slug"
            rules={[{ required: false }]}
            style={{
              textAlign: "center",
            }}
          >
            <Input size="large" placeholder="รหัสเข้างาน" />
          </Form.Item>

          <div>
            <Form.Item wrapperCol={{ span: 16 }}>
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
        <Row
          justify="space-between"
          style={{ textAlign: "start", marginTop: "50px" }}
        >
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
              พิมรหัส ที่ได้รับจากทีมงานเพื่อ รับบัตรเข้างาน
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
              }}
            >
              บัตรโต๊ะจีนและที่นั่งที่จอง เพื่อลงทะเบียนและดูข้อมูล
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
              }}
            >
              เพื่อเข้างานนะค้าบ
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              หากยังไม่ได้จองโต๊ะ สามารถจองได้ผ่าน
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
              }}
            >
              ปุ่ม “จองโต๊ะ” ด้านล่างนะค้าบ
            </Typography>
          </div>
        </Row>
        <Button
          shape="round"
          style={{ width: "60%", height: "50px", marginTop: "60px" }}
          onClick={() => {
            navigate("/reserve-table");
          }}
        >
          <Typography className="black-text">จองโต๊ะ</Typography>
        </Button>
      </div>
    </div>
  );
}
