import React, { useEffect, useState } from "react";

import { Button, Card, Divider, Image, List, Row, Typography } from "antd";

import liff from "@line/liff";

import Giraffe from "../../Static/images/Giraffe.png";
import BualuangLogo from "../../Static/images/bualuang.jpg";
import QRCode from "../../Static/images/qrcode.png";
import { FileOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import useCopyToClipboard from "../../components/copy-clipboard";
import Swal from "sweetalert2";
import Appbar from "../../components/appbar";

//ENUM IN THIS PAGE
const amountChairs = 2;
const pricePerChair = 360;
const priceAllOfDesk = 3200;
const summary = amountChairs * pricePerChair;
const table = "A3";
const chairs = "A,B";

const data = [
  {
    table: "A1",
    chair: "a",
  },
  {
    table: "A1",
    chair: "b",
  },
  {
    table: "A1",
    chair: "c",
  },
  {
    table: "A1",
    chair: "d",
  },
  {
    table: "B1",
    chair: "a",
  },
];

export default function ReplyInfoPage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState() as any;

  // useEffect(() => {
  //   liff
  //     .init({
  //       liffId: "1660816746-JAReyGx2", //import.meta.env.VITE_LIFF_ID,
  //       withLoginOnExternalBrowser: true,
  //     })
  //     .then(async () => {
  //       console.log("LIFF init succeeded.");
  //       console.log("get profile :" + (await liff.getProfile()));
  //       console.log(await liff.getProfile());

  //       const profileData = await liff.getProfile();

  //       setProfile(profileData);
  //     })
  //     .catch((e: Error) => {
  //       console.log("LIFF init failed.");
  //       console.log(`${e}`);
  //     });
  // }, []);

  // interface LiffProfile {
  //   displayName?: string;
  //   userId?: string;
  //   pictureUrl?: string;
  // }

  // function liffProfile(profile: LiffProfile): {
  //   name: string;
  //   userID: string;
  //   image: string;
  // } {
  //   return {
  //     name: `${profile.displayName}`,
  //     userID: `${profile.userId}`,
  //     image: `${profile.pictureUrl}`,
  //   };
  // }
  const swalCopy = () => {
    copy("8707120260");
    Swal.fire({
      backdrop: false,
      background: "#4D5667",
      position: "center",
      icon: "success",
      title: "Copy success",
      showConfirmButton: false,
      timer: 800,
    });
  };
  // console.log(profile.name);

  const [value, copy] = useCopyToClipboard();
  return (
    <div>
      <Appbar />
      <div className="app-layout">
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
            <Typography className="yellow-text">
              {/* {profile.displayName} */}
              phuwis
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
          โต๊ะ {table}
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
            {chairs}
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
            {amountChairs}
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
            {pricePerChair}
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
            {summary}
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
          ( {amountChairs} ที่นั่ง x {pricePerChair} บาท )
        </Typography>
        <Row
          justify="space-between"
          align="middle"
          style={{ marginTop: "27px" }}
        >
          <Typography className="yellow-text">ข้อมูลการชำระเงิน</Typography>
          <div
            style={{
              width: "60%",
              height: "8px",
              backgroundColor: "#F6B63B",
            }}
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
                onClick={() => swalCopy()}
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

        <List
          size="small"
          header={
            <div>
              <Typography
                className="white-header text-shadow "
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                โต๊ะ - เก้าอี้ของคุณ
              </Typography>
              <Card
                size="small"
                style={{ width: "100%", backgroundColor: "#303E57" }}
              >
                <Row justify="space-between" align="middle">
                  <Image preview={false} width={20} src={Giraffe}></Image>
                  <Typography className="yellow-header">เก้าอี้</Typography>
                  <Typography className="yellow-header">โต๊ะ</Typography>
                </Row>
              </Card>
            </div>
          }
          footer
          style={{ marginTop: "30px", backgroundColor: "#677185" }}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card size="small" style={{ width: "100%" }}>
                <Row justify="space-between" align="middle">
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "10%",
                      height: "35px",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      preview={false}
                      width={20}
                      src={Giraffe}
                      style={{ padding: "1px" }}
                    ></Image>
                  </div>
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "70%",
                      height: "35px",
                    }}
                  >
                    <Typography className="black-text">{item.chair}</Typography>
                  </div>
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "10%",
                      height: "35px",
                    }}
                  >
                    <Typography className="black-text">{item.table}</Typography>
                  </div>
                </Row>
              </Card>
            </List.Item>
          )}
        />
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
