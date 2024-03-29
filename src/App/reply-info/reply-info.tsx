import { Button, Card, Image, List, Row, Typography } from "antd";

import Giraffe from "../../Static/images/Giraffe.png";

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useCopyToClipboard from "../../components/copy-clipboard";
import Swal from "sweetalert2";
import Appbar from "../../components/appbar";
import { getMe } from "../../config/liff";
import * as API from "../API";
import convertTimeStampToDate from "../../components/date-time";
import { exportColorWithStatus } from "../../components/common";
import { useEffect } from "react";

//ENUM IN THIS PAGE
const amountChairs = 2;
const pricePerChair = 350;
const priceAllOfDesk = 3200;
const summary = amountChairs * pricePerChair;
const table = "A3";
const chairs = "A,B";

export async function AllBookingLoader({ request, params }: any) {
  try {
    const data = await getMe();
    const allBooking = await API.getAllBooking(data?.user.data.line_liff_id);

    return {
      allBooking: allBooking.data.data,
      data: data?.user.data,
    };
  } catch (e: any) {
    return { data: null };
  }
}

export default function ReplyInfoPage() {
  const navigate = useNavigate();
  const { allBooking, data } = useLoaderData() as any;

  const onClickWithId = (id: any) => {
    navigate(`/single-reply-info/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          รายละเอียดการจองโต๊ะ
        </Typography>
        <Row
          justify="start"
          align="middle"
          style={{
            marginTop: "30px",
            marginBottom: "10px",
            textAlign: "start",
          }}
        >
          <Image preview={false} width={80} src={Giraffe} />
          <div style={{ width: "70%" }}>
            <Typography className="yellow-text" style={{ fontSize: "14px" }}>
              Giraffe Kung
            </Typography>
            <Typography
              className="yellow-text"
              style={{ fontSize: "14px", marginTop: "10px" }}
            >
              นี่คือรายการซื้อบัตรทั้งหมดของพี่ ๆ ครับ หากสถานะยังเป็นสีแดง
              แสดงว่า "ต้องส่งสลิปโอนเงินใน Line OA ก่อน"
              หากสถานะเป็นสีเขียวแล้ว แสดงว่า "พร้อมใช้ในวันงานแล้ว"
              ส่วนสีขาวคือพี่ ๆ ได้ยกเลิกการจองครับ
            </Typography>
          </div>
        </Row>

        <List
          size="small"
          header={
            <div>
              <Typography
                className="white-header text-shadow "
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                การจองของคุณ
              </Typography>
              <Card
                style={{
                  width: "100%",
                  backgroundColor: "#303E57",
                }}
              >
                <Row justify="space-between" align="middle">
                  <Typography className="yellow-header">สถานะ</Typography>
                  <Typography className="yellow-header">วันที่จอง</Typography>
                  <Typography className="yellow-header">โต๊ะ</Typography>
                </Row>
              </Card>
            </div>
          }
          footer
          style={{ marginTop: "30px", backgroundColor: "#677185" }}
          bordered
          dataSource={allBooking}
          renderItem={(data: any) => (
            <List.Item>
              <Button
                size="large"
                style={{ width: "100%", height: "60px" }}
                onClick={() => onClickWithId(data.id)}
              >
                <Row justify="space-between" align="middle">
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "20px",
                      height: "20px",
                      backgroundColor: exportColorWithStatus(data.status),
                    }}
                  >
                    {/* <Typography className="black-text">
                      {data.status}
                    </Typography> */}
                  </div>
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "65%",
                    }}
                  >
                    <Typography className="black-text">
                      {convertTimeStampToDate(data.created_at)}
                    </Typography>
                  </div>
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "10%",
                    }}
                  >
                    <Typography className="black-text">
                      {data.desk.label}
                    </Typography>
                  </div>
                </Row>
              </Button>
            </List.Item>
          )}
        />
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          ข้อมูลผู้จอง
        </Typography>

        <div>
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
          <Card
            size="small"
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography className="yellow-text">
              {/* {profile.displayName} */}
              {data.first_name}
            </Typography>
          </Card>
        </div>
        <div>
          <Typography
            className="white-text"
            style={{
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            นามสกุล
          </Typography>
          <Card
            size="small"
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography className="yellow-text">
              {/* {profile.displayName} */}
              {data.last_name}
            </Typography>
          </Card>
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
          <Card
            size="small"
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography className="yellow-text">{data.tel}</Typography>
          </Card>
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
          <Card
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography className="yellow-text">{data.information}</Typography>
          </Card>
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
          <Card
            size="small"
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "30px",
            }}
          >
            <Typography className="yellow-text">{data.email}</Typography>
          </Card>
        </div>

        {/* <Link to="/">
          <Button
            shape="round"
            style={{
              width: "60%",
              height: "50px",
              marginTop: "30px",
              marginBottom: "50px",
            }}
          >
            <Typography className="black-text">ย้อนกลับ</Typography>
          </Button>
        </Link> */}

        <Button
          shape="round"
          style={{
            width: "60%",
            height: "50px",
            marginTop: "30px",
            marginBottom: "50px",
          }}
          onClick={() => {
            navigate("/reserve-table");
          }}
        >
          <Typography className="black-text">ไปจองโต๊ะ</Typography>
        </Button>
      </div>
    </div>
  );
}
