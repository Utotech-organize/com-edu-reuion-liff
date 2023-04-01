import { Button, Card, Image, Row, Typography } from "antd";
import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";
import Stage from "../../Static/images/cinema.png";
import Entrance from "../../Static/images/walking-man.png";
import Giraffe from "../../Static/images/Giraffe.png";
import Appbar from "../../components/appbar";

import Mockup from "../../assets/mockup-tables.json";

export default function ReserveChairPage() {
  {
    /* FIXME */
  }
  // const [selectedSeat, setSelectedSeat] = React.useState([]) as any[];
  const [colorA, setColorA] = useState(true);
  const [colorB, setColorB] = useState(true);
  const [colorC, setColorC] = useState(true);
  const [colorD, setColorD] = useState(true);
  const [colorE, setColorE] = useState(true);
  const [colorF, setColorF] = useState(true);
  const [colorG, setColorG] = useState(true);
  const [colorH, setColorH] = useState(true);
  const [colorI, setColorI] = useState(true);
  const [colorJ, setColorJ] = useState(true);
  const handleClickA = () => {
    setColorA(!colorA);
  };

  const handleClickB = () => {
    setColorB(!colorB);
  };

  const handleClickC = () => {
    setColorC(!colorC);
  };

  const handleClickD = () => {
    setColorD(!colorD);
  };

  const handleClickE = () => {
    setColorE(!colorE);
  };

  const handleClickF = () => {
    setColorF(!colorF);
  };

  const handleClickG = () => {
    setColorG(!colorG);
  };

  const handleClickH = () => {
    setColorH(!colorH);
  };

  const handleClickI = () => {
    setColorI(!colorI);
  };

  const handleClickJ = () => {
    setColorJ(!colorJ);
  };

  return (
    <div>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          ผังที่นั่งงาน ComEdu Reunion 2023
        </Typography>
        <Typography
          className="white-text"
          style={{
            textAlign: "start",
            marginTop: "27px",
            marginBottom: "16px",
          }}
        >
          ยินดีต้อนรับ : Guest
        </Typography>
        <Card size="small" style={{ marginBottom: "10px" }}>
          <Image preview={false} src={Stage} style={{ width: "40px" }} />
          <Typography className="black-text">เวที</Typography>
        </Card>
        {/* FIXME */}
        {/* <div id="big-circle" className="circle big">
          A3
          {Mockup.seats.map((d: any, index: any) => (
            <div
              key={d.name}
              className={`circle ${d.label}`}
              style={{
                background:
                  selectedSeat.indexOf(d.id) > -1
                    ? "rgb(156, 176, 215)"
                    : index < 6
                    ? "#FFA800"
                    : "#00B1B1",
              }}
              onClick={() => setSelectedSeat((prev: any) => [...prev, d.id])}
            >
              {d.name}
            </div>
          ))}
        </div> */}
        <div id="big-circle" className="circle big black-text">
          <Typography className="black-text" style={{ marginTop: "40%" }}>
            โต๊ะ A1
          </Typography>
          <Button
            className="circle one black-text"
            type="text"
            style={{ backgroundColor: colorA ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickA}
          >
            A
          </Button>
          <Button
            className="circle two black-text"
            type="text"
            style={{ backgroundColor: colorB ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickB}
          >
            B
          </Button>
          <Button
            className="circle three black-text"
            type="text"
            style={{ backgroundColor: colorC ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickC}
          >
            C
          </Button>
          <Button
            className="circle four black-text"
            type="text"
            style={{ backgroundColor: colorD ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickD}
          >
            D
          </Button>
          <Button
            className="circle five black-text"
            type="text"
            style={{ backgroundColor: colorE ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickE}
          >
            E
          </Button>
          <Button
            className="circle six black-text"
            type="text"
            style={{ backgroundColor: colorF ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickF}
          >
            F
          </Button>
          <Button
            className="circle seven black-text"
            type="text"
            style={{ backgroundColor: colorG ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickG}
          >
            G
          </Button>
          <Button
            className="circle eight black-text"
            type="text"
            style={{ backgroundColor: colorH ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickH}
          >
            H
          </Button>
          <Button
            className="circle nine black-text"
            type="text"
            style={{ backgroundColor: colorI ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickI}
          >
            I
          </Button>
          <Button
            className="circle ten black-text"
            type="text"
            style={{ backgroundColor: colorJ ? "#FFA800" : "#9CB0D7" }}
            onClick={handleClickJ}
          >
            J
          </Button>
        </div>
        <Card size="small" style={{ marginTop: "350px" }}>
          <Image preview={false} src={Entrance} style={{ width: "40px" }} />
          <Typography className="black-text">ทางเข้า</Typography>
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
          <Image preview={false} width={80} src={Giraffe} />
          <div>
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
              กดเลือกเก้าอี้ที่ต้องการเพื่อทำการจองนะฮัฟ
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              เก้าอี้ละ 360 ฿ ถ้าเหมา 3,200 ฿ น๊ะ
            </Typography>
            <Typography className="yellow-text" style={{ fontSize: "14px" }}>
              A, B หรือตัวอักษรอื่นๆ คือหมายเลข เก้าอี้นะฮัฟ
            </Typography>
          </div>
        </Row>
        <Typography className="white-text" style={{ textAlign: "start" }}>
          รายละเอียดการจองโต๊ะ
        </Typography>
        {/* FIXME */}
        <Row justify="start" align="middle" style={{ marginTop: "10px" }}>
          <Card
            style={{
              width: "20%",
              height: "20%",
              marginRight: "10px",
              backgroundColor: "#ffa800",
              borderRadius: "50%",
            }}
          >
            <Typography className="black-text" style={{ fontSize: "14px" }}>
              A
            </Typography>
          </Card>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
            }}
          >
            หมายถึง ที่นั่งนี้ยังว่างอยู่
          </Typography>
        </Row>
        <Row
          justify="start"
          align="middle"
          style={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <Card
            style={{
              width: "20%",
              height: "20%",
              marginRight: "10px",
              backgroundColor: "#9CB0D7",
              borderRadius: "50%",
            }}
          >
            <Typography className="black-text" style={{ fontSize: "14px" }}>
              A
            </Typography>
          </Card>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
            }}
          >
            หมายถึง ที่นั่งนี่คุณกำลังเลือก
          </Typography>
        </Row>
        <Row justify="start" align="middle">
          <Card
            style={{
              width: "20%",
              height: "20%",
              marginRight: "10px",
              backgroundColor: "#00B1B1",
              borderRadius: "50%",
            }}
          >
            <Typography className="black-text" style={{ fontSize: "14px" }}>
              A
            </Typography>
          </Card>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
            }}
          >
            หมายถึง ที่นั่งนี้ถูกจองแล้ว
          </Typography>
        </Row>
        <Card size="small" style={{ marginTop: "30px" }}>
          <Row justify="space-between" align="middle">
            <div style={{ width: "50%" }}>
              <Typography className="black-header">666 คน</Typography>
              <Typography className="black-text">จำนวนผู้ลงทะเบียน</Typography>
            </div>

            <Link to={"/detail-reserve"}>
              <div
                style={{
                  width: "80px",
                  height: "60px",
                  backgroundColor: "#F6B63B",
                  borderRadius: "20px",
                }}
              >
                <Typography className="black-sm-text">
                  จองตามที่เลือก
                </Typography>
              </div>
            </Link>
            <Link to={"/detail-reserve"}>
              <div
                style={{
                  width: "80px",
                  height: "60px",
                  backgroundColor: "#4D5667",
                  borderRadius: "20px",
                }}
              >
                <Typography className="white-sm-text">จองทั้งโต๊ะ</Typography>
              </div>
            </Link>
          </Row>
        </Card>
        <Link to="/reserve-table">
          <Button
            shape="round"
            style={{
              width: "30%",
              height: "50px",
              marginTop: "20px",
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
