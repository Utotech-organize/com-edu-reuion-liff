import React from "react";
import { Button, Card, Image, Row, Typography } from "antd";

import Giraffe from "../../Static/images/Giraffe.png";

import "../../Static/styles/Layout.css";
import Appbar from "../../components/appbar";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div style={{ height: "100vh" }}>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          Welcome ComEdu Reunion
        </Typography>
        <Image
          preview={false}
          width={200}
          src={Giraffe}
          style={{ marginTop: "44px" }}
        ></Image>
        <Row
          justify="center"
          align="middle"
          style={{ marginTop: "35px", marginBottom: "25px" }}
        >
          <Card
            style={{
              width: "35%",
              height: "10px",
              backgroundColor: "#F6B63B",
              marginRight: "10px",
            }}
          />
          <Typography className="yellow-text">Giffe Kun</Typography>
          <Card
            style={{
              width: "35%",
              height: "10px",
              backgroundColor: "#F6B63B",
              marginLeft: "10px",
            }}
          />
        </Row>
        <Typography className="white-text" style={{ marginBottom: "10px" }}>
          สวัสดีฮัฟเพื่อน ๆ ขอต้อนรับสู่ ComEdu Reunion
        </Typography>
        <Typography className="white-text" style={{ marginBottom: "10px" }}>
          เพื่อน ๆ สนใจเข้าร่วมงานกับเราไหม
        </Typography>
        <Typography className="white-text" style={{ marginBottom: "30px" }}>
          รอข้าอยู่ไยกด ขอจองโต๊ะ เลยนะฮัฟ
        </Typography>
        <Link to="/reserveTable">
          <Button
            shape="round"
            style={{ width: "60%", height: "50px", marginBottom: "20px" }}
          >
            <Typography className="black-text">ขอจองโต๊ะ</Typography>
          </Button>
        </Link>

        <Button shape="round" style={{ width: "60%", height: "50px" }}>
          <Typography className="black-text">
            ตรวจสอบข้อมูล & ชำระเงิน
          </Typography>
        </Button>
      </div>
    </div>
  );
}
