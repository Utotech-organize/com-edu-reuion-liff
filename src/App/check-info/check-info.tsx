import React from "react";
import Appbar from "../../components/appbar";
import { Button, Card, Image, Row, Typography } from "antd";
import { Link } from "react-router-dom";

import Giraffe from "../../Static/images/Giraffe.png";

export default function CheckInfoPage() {
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
            <Typography className="yellow-text">ชานม ไข่มุก</Typography>
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
            <Typography className="yellow-text">09xyyyzzzz</Typography>
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
            <Typography className="yellow-text">
              มจพ. คณะครุศาสตร์อุตสาหกรรม ภาควิชาคอมพิวเตอร์ศึกษา
              สาขาวิชาคอมพิวเตอร์ธุรกิจ นักศึกษา
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
            <Typography className="yellow-text">
              s6402041510000@email.kmutnb.ac.th
            </Typography>
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
          <Link to="/detailReserve">
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
