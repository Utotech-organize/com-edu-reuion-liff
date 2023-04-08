import { FileOutlined } from "@ant-design/icons";
import { Button, Card, Image, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

import useCopyToClipboard from "../../components/copy-clipboard";

import BualuangLogo from "../../Static/images/bualuang.jpg";
import Giraffe from "../../Static/images/Giraffe.png";
import QRCode from "../../Static/images/qrcode.png";
import Swal from "sweetalert2";

import * as API from "../API";
import { getMe } from "../../config/liff";

//ENUM IN THIS PAGE
const amountChairs = 2;
const pricePerChair = 360;
const priceAllOfDesk = 3200;
const summary = amountChairs * pricePerChair;
const table = "A3";

export async function ChairWithDeskLoaderInDetail({ request, params }: any) {
  try {
    const chair = await API.getChairWithDeskID(params.id);

    return { chair: chair.data.data };
  } catch (e: any) {
    localStorage.removeItem("token");

    return { data: null };
  }
}

export default function DetailReservePage() {
  const [value, copy] = useCopyToClipboard();
  const location = useLocation();
  const { chair } = useLoaderData() as any;

  useEffect(() => {
    const res = getMe();
    console.log({ res });
  }, []);
  console.log("-----------");

  console.log(location);

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
        {/* FIXME */}
        ยินดีต้อนรับ : ชานม ไข่มุก
      </Typography>
      <div id="big-circle-detail" className="circle big-detail">
        {/* {chair.label} */}
        A3
        {chair.map((d: any, index: any) => (
          <div
            key={d.id}
            className={`circle ${d.chair_no}`}
            style={{
              background: "#FFA800",
              //   selectedSeat.indexOf(d.id) > -1
              //     ? "#00B1B1"
              //     : exportColorWithStatus(d.status),
              // cursor: d.status === available ? "pointer" : "default",
            }}
          >
            {d.label}
          </div>
        ))}
      </div>
      <Typography
        className="white-bold"
        style={{
          marginTop: "30px",
          textAlign: "start",
          marginBottom: "280px",
        }}
      >
        โต๊ะ {table}
      </Typography>

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
      <Row justify="space-between" align="middle" style={{ marginTop: "27px" }}>
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

            <Typography className="yellow-text" style={{ marginLeft: "10px" }}>
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
              className="black-text"
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
      <Link to="../complete">
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
      <Link to="../reserve-table">
        <Button
          shape="round"
          style={{
            width: "60%",
            height: "50px",

            marginBottom: "30px",
          }}
        >
          <Typography className="black-text">ย้อนกลับ</Typography>
        </Button>
      </Link>
    </div>
  );
}
