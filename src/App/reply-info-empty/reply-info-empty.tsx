import React from "react";
import Appbar from "../../components/appbar";
import { Button, Card, Image, Row, Typography } from "antd";

import Giraffe from "../../Static/images/Giraffe.png";
import { Link } from "react-router-dom";

export default function ReplyInfoEmptyPage() {
  return (
    <div>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          ผลลัพธ์ข้อมูล
        </Typography>
        <Typography
          className="white-text"
          style={{ marginTop: "27px", textAlign: "start" }}
        >
          ผลการค้นหา
        </Typography>
        <Typography className="white-text" style={{ textAlign: "start" }}>
          เบอร์โทรศัพท์ ไม่พบข้อมูล
        </Typography>

        <Row
          justify="space-between"
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
              Giffe Kun
            </Typography>

            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
              }}
            >
              เพื่อน ๆ ยังไม่ได้ลงทะเบียนการจองโต๊ะน๊ะ
              สามารถลงทะเบียนได้โดยกดที่ปุ่ม ลงทะเบียน ได้เลยนะฮัฟ
            </Typography>
          </div>
        </Row>
        <Link to={"../register"}>
          <Button
            style={{
              justifyContent: "center",
              width: "50%",
              height: "50px",
              backgroundColor: "#F6B63B",
              marginBottom: "90px",
            }}
          >
            <Typography className="black-text" style={{ textAlign: "center" }}>
              ลงทะเบียนเลย
            </Typography>
          </Button>
        </Link>
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          รายละเอียดการจองโต๊ะ
        </Typography>
        <Row
          justify="space-between"
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
              Giffe Kun
            </Typography>

            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
              }}
            >
              เพื่อน ๆ ยังไม่ได้จองโต๊ะเลย อย่างงี้เข้าไปร่วมกินในงานไม่ได้น๊ะ
              อยากจองโต๊ะกดปุ่ม ขอจองโต๊ะ ได้เลยน๊ะ
            </Typography>
          </div>
        </Row>
        <Link to={"../register"}>
          <Button
            style={{
              justifyContent: "center",
              width: "50%",
              height: "50px",
              backgroundColor: "#F6B63B",
              marginBottom: "90px",
            }}
          >
            <Typography className="black-text" style={{ textAlign: "center" }}>
              ขอจองโต๊ะ
            </Typography>
          </Button>
        </Link>
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
      </div>
    </div>
  );
}
