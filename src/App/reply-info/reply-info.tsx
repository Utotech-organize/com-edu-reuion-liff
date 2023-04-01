import React from "react";
import Appbar from "../../components/appbar";
import { Button, Card, Image, Row, Typography } from "antd";

import Giraffe from "../../Static/images/Giraffe.png";
import BualuangLogo from "../../Static/images/bualuang.jpg";
import QRCode from "../../Static/images/qr-code.jpg";
import { FileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useCopyToClipboard from "../../components/copy-clipboard";

export default function ReplyInfoPage() {
  const [value, copy] = useCopyToClipboard();
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
          เบอร์โทรศัพท์ 09xyyyzzzz
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
              className="yellow-text"
              style={{ fontSize: "14px", marginTop: "10px" }}
            >
              (สถานะการชำระเงิน : ยังไม่ได้ชำระ)
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
              }}
            >
              “ถ้าชำระเงินสำเร็จแล้ว รบกวนส่งรูปภาพ สลิปด้วยนะฮัฟ
            </Typography>

            <Typography className="yellow-text" style={{ fontSize: "14px" }}>
              สามารถส่งได้ที่หน้า Line OA ได้เลยฮัฟผม”
            </Typography>
          </div>
        </Row>
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
        <Row
          justify="space-between"
          align="middle"
          style={{ marginTop: "27px" }}
        >
          <Typography className="yellow-text">ข้อมูลการชำระเงิน</Typography>
          <div
            style={{ width: "60%", height: "8px", backgroundColor: "#F6B63B" }}
          ></div>
        </Row>
        <Card
          style={{
            backgroundColor: "#303E57",
            marginTop: "13px",
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

              <Typography
                className="yellow-text"
                style={{ marginLeft: "10px" }}
              >
                ธนาคารกรุงเทพฯ
              </Typography>
            </Row>
          </Row>
          <Row justify={"space-between"}>
            <Typography className="yellow-text">ชื่อบัญชี</Typography>
            <Typography className="yellow-text">
              น.ส. ภัทรวาดี ชาตะ และ
            </Typography>
          </Row>
          <Typography className="yellow-text" style={{ textAlign: "end" }}>
            นาย วัชพล เหลาทอง
          </Typography>
          <Typography
            className="yellow-text"
            style={{ textAlign: "start", marginBottom: "10px" }}
          >
            เลขที่บัญชี
          </Typography>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              height: "40px",
            }}
          >
            <Row justify="space-between">
              <div></div>
              <Typography
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#9C9D9D",

                  alignSelf: "center",
                }}
              >
                8707120260
              </Typography>
              <Button
                style={{
                  backgroundColor: "#677185",
                  width: "50px",
                  borderRadius: "8px",
                  height: "40px",
                }}
                onClick={() => copy("8707120260")}
              >
                <FileOutlined
                  style={{
                    fontSize: "25px",
                  }}
                />
              </Button>
            </Row>
          </div>
        </Card>
        <Image preview={false} width={380} src={QRCode}></Image>

        <Link to="/">
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
        </Link>
      </div>
    </div>
  );
}
