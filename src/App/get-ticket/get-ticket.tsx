import { Button, Form, Image, Input, Row, Spin, Typography } from "antd";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
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
  const { state } = useNavigation();
  const { data } = useLoaderData() as any;

  //FIXME PHOOM
  const onFinish = async (v: any) => {
    const values = {
      ticket: v.slug,
      line_liff_id: data.line_liff_id,
      line_display_name: data.line_display_name,
      line_photo_url: data.line_photo_url,
    };

    try {
      const res = await API.getTicket(values);

      navigate(`/reply-info/`);
    } catch (error) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Spin spinning={state == "loading" || state == "submitting"}>
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
          <Row
            justify="space-between"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            <div>
              <Image preview={false} width={100} src={Giraffe} />
              <div style={{ padding: 5 }}></div>
              <Typography className="yellow-text" style={{ fontSize: "14px" }}>
                Giraffe Kung
              </Typography>
              <Typography
                className="white-text"
                style={{
                  fontSize: "14px",
                  marginTop: "10px",
                }}
              >
                กรอกรหัสการจอง ที่ได้รับจากทีมงานขายบัตร
                เพื่อที่จะรับบัตรเข้างานอิเล็กทรอนิกส์ (E-Ticket)
                ไว้สำหรับเข้างาน หากยังไม่ได้จองโต๊ะ สามารถกดปุ่ม "จองโต๊ะ"
                ได้เลยครับ สำหรับท่านที่ซื้อบัตรไปก่อนหน้าแล้ว หากมีปัญหา
                โปรดติดต่อ Line OA เท่านั้นครับ
                ขอขอบคุณและขออภัยในความไม่สะดวกที่เกิดขึ้นครับ
              </Typography>
              {/* <Typography
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
              </Typography> */}
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
    </Spin>
  );
}
