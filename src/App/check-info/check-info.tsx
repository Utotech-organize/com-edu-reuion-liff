import React from "react";
import Appbar from "../../components/appbar";
import { Button, Card, Image, Row, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

import Giraffe from "../../Static/images/Giraffe.png";
import Swal from "sweetalert2";

export default function CheckInfoPage() {
  const location = useLocation();

  const swalCheck = () => {
    Swal.fire("Any fool can use a computer");
  };

  const data = location.state;

  {
    console.log(location);
  }
  return (
    <div style={{ height: "100vh" }}>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          ตรวจสอบข้อมูล
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
            ชื่อ-นามสกุล
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
            <Typography className="yellow-text">{data.name}</Typography>
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
            <Typography className="yellow-text">{data.phone}</Typography>
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
            <Typography className="yellow-text">{data.workplace}</Typography>
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
        <Row justify="start" style={{ textAlign: "start" }}>
          <Image preview={false} width={80} src={Giraffe} />
          <div style={{ marginLeft: "10px", width: "70%" }}>
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
              ตรวจสอบข้อมูลก่อนน๊าา ถ้าข้อมูลผิดก็ กดย้อนกลับไปแก้ได้น๊ะ
              แต่ถ้าเรียบ ร้อยแล้วก็กดยืนยันได้เลย
            </Typography>
          </div>
        </Row>
        <div>
          <Link to="/reserve-table">
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
          <Link to="/register">
            <Button
              shape="round"
              style={{
                width: "60%",
                height: "50px",
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
