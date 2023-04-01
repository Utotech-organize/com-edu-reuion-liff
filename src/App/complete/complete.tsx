import React from "react";
import Appbar from "../../components/appbar";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Image, Row, Typography } from "antd";

import Giraffe from "../../Static/images/Giraffe.png";
import { Link } from "react-router-dom";

export default function CompletePage() {
  return (
    <div style={{ height: "100vh" }}>
      <Appbar />
      <div className="app-layout">
        <CheckCircleOutlined
          style={{ fontSize: "250px", color: "#F6B63B", marginTop: "20%" }}
        />
        <Typography
          className="normal-text text-shadow"
          style={{
            color: "white",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: "100",
            position: "absolute",
            display: "inline-block",
            top: "25%",
            left: "27%",
            opacity: "0.8",
          }}
        >
          เรียบร้อย
        </Typography>
        <Row
          justify="start"
          style={{
            textAlign: "start",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <Image preview={false} width={80} src={Giraffe} />
          <div style={{ marginLeft: "50px" }}>
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
              เธอก็ไดจองโต๊ะเรียบร้อยแล้วนะ
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              ทีนี้อยากทำไรต่อหรอฮัฟ
            </Typography>
          </div>
        </Row>
        <Link to="">
          <Button
            shape="round"
            style={{ width: "80%", height: "50px", marginBottom: "20px" }}
          >
            <Typography className="black-text">กลับเข้า Line</Typography>
          </Button>
        </Link>
        <Link to="">
          <Button
            shape="round"
            style={{ width: "80%", height: "50px", marginBottom: "20px" }}
          >
            <Typography className="black-text">
              อยากจะจองโต๊ะจังเลยจร้า
            </Typography>
          </Button>
        </Link>
        <Link to="">
          <Button
            shape="round"
            style={{ width: "80%", height: "50px", marginBottom: "20px" }}
          >
            <Typography className="black-text">
              ไปชำระเงินโต๊ะที่จองไว้ เพราะยังไม่ชำระ
            </Typography>
          </Button>
        </Link>
        <Link to="">
          <Button
            shape="round"
            style={{ width: "80%", height: "50px", marginBottom: "20px" }}
          >
            <Typography className="black-text">
              ขอกลับไปตรวจสอบข้อมูลและกัน
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}
