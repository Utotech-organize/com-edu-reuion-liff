import { FileOutlined } from "@ant-design/icons";
import { Button, Card, Image, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import BualuangLogo from "../../Static/images/bualuang.jpg";
import Giraffe from "../../Static/images/Giraffe.png";

export default function DetailReservePage() {
  return (
    <div className="app-layout">
      <Typography
        className="white-header"
        style={{ height: "110px", paddingTop: "80px" }}
      >
        รายละเอียดการจองโต๊ะ
      </Typography>
      <Typography
        className="white-text"
        style={{
          marginTop: "30px",
          textAlign: "start",
        }}
      >
        ยินดีต้อนรับ : ชานม ไข่มุก
      </Typography>
      <Typography
        className="white-bold"
        style={{
          marginTop: "30px",
          textAlign: "start",
        }}
      >
        โต๊ะ A3
      </Typography>
      <Row justify={"space-between"} style={{ width: "55%" }}>
        <Typography
          className="white-text"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          ที่นั่ง
        </Typography>
        <Typography
          className="white-text"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          A,B
        </Typography>
      </Row>
      <Row justify={"space-between"} style={{}}>
        <Typography
          className="white-text"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          จำนวน
        </Typography>
        <Typography
          className="white-text"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          2
        </Typography>
        <Typography
          className="white-text"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          ที่นั่ง
        </Typography>
      </Row>
      <Row justify={"space-between"} style={{}}>
        <Typography
          className="white-text"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          ราคา/ที่นั่ง
        </Typography>
        <Typography
          className="white-text"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          360
        </Typography>
        <Typography
          className="white-text"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          บาท
        </Typography>
      </Row>
      <Row justify={"space-between"} style={{}}>
        <Typography
          className="white-bold"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          รวมทั้งสิ้น
        </Typography>
        <Typography
          className="white-bold"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          720
        </Typography>
        <Typography
          className="white-bold"
          style={{
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          บาท
        </Typography>
      </Row>
      <Typography
        className="white-text"
        style={{
          textAlign: "start",
        }}
      >
        ( 2 ที่นั่ง x 360 บาท )
      </Typography>
      <Card
        style={{
          backgroundColor: "#303E57",
          marginTop: "62px",
          marginBottom: "27px",
        }}
        bordered={false}
      >
        <Row justify={"space-between"}>
          <Typography className="yellow-text">ชื่อธนาคาร</Typography>
          <Row>
            <Image
              preview={false}
              width={30}
              style={{ borderRadius: "50%" }}
              src={BualuangLogo}
            />

            <Typography className="yellow-text" style={{ marginLeft: "10px" }}>
              ธนาคารกรุงเทพฯ
            </Typography>
          </Row>
        </Row>
        <Row justify={"space-between"}>
          <Typography className="yellow-text">ชื่อบัญชี</Typography>
          <Typography className="yellow-text">น.ส. ภัทรวาดี ชาตะ</Typography>
        </Row>
        <Row justify={"space-between"}>
          <Typography className="yellow-text">เลขที่บัญชี</Typography>
          <Row justify={"center"}>
            <Typography
              style={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                color: "#9C9D9D",
              }}
            >
              0001555xx9
            </Typography>
            <FileOutlined style={{ fontSize: "25px", marginLeft: "10px" }} />
          </Row>
        </Row>
      </Card>
      <Row
        justify="space-between"
        align="middle"
        style={{
          marginTop: "30px",
          marginBottom: "10px",
          textAlign: "start",
        }}
      >
        <Image preview={false} width={70} src={Giraffe}></Image>
        <div style={{}}>
          <Typography className="yellow-text" style={{ fontSize: "14px" }}>
            Giffe Kun
          </Typography>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            เมื่อชำระเงินสำเร็จแล้ว รบกวนส่งรูปภาพสลิปด้วยนะฮัฟ
          </Typography>
          <Typography className="yellow-text" style={{ fontSize: "14px" }}>
            สามารถส่งได้ที่หน้า Line OA ได้เลยฮัฟผม
          </Typography>
        </div>
      </Row>
      <Link to="../completePay">
        <Button
          shape="round"
          style={{
            width: "60%",
            height: "50px",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <Typography className="black-text">ยืนยัน</Typography>
        </Button>
      </Link>
    </div>
  );
}
