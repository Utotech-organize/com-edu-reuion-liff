import { Button, Card, Image, Row, Typography } from "antd";
import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";
import Stage from "../../Static/images/cinema.png";
import Entrance from "../../Static/images/walking-man.png";
import Giraffe from "../../Static/images/Giraffe.png";
import Appbar from "../../components/appbar";

import Mockup from "../../assets/mockup-tables.json";

export default function ReserveChairPage() {
  const [selectedSeat, setSelectedSeat] = React.useState<any>([]);

  const handleSelectedSeat = (id: any) => {
    let prev = selectedSeat;

    if (prev.indexOf(id) === -1) {
      setSelectedSeat([...selectedSeat, id]);
      console.log("case 1");
    } else {
      prev = prev.filter((c: any) => c != id);
      console.log("case 2");
      setSelectedSeat(prev);
    }
  };

  console.log({ selectedSeat });

  const exportColorWithStatus = (status: any) => {
    console.log(status);

    let color = "";
    if (status === "availableSeat") {
      color = "#FFA800";
    } else if (status === "fullSeat") {
      color = "#00B1B1";
    }
    console.log(color);

    return color;
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
        <div id="big-circle" className="circle big">
          A3
          {Mockup.seats.map((d: any, index: any) => (
            <div
              key={d.name}
              className={`circle ${d.label}`}
              style={{
                background:
                  selectedSeat.indexOf(d.id) > -1
                    ? "rgb(156, 176, 215)"
                    : exportColorWithStatus(d.status),
                cursor: d.status === "fullSeat" ? "default" : "pointer",
              }}
              onClick={() =>
                d.status === "fullSeat" ? {} : handleSelectedSeat(d.id)
              }
            >
              {d.name}
            </div>
          ))}
        </div>
        <Card size="small" style={{ marginTop: "380px" }}>
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
          <Row justify="space-around" align="middle">
            <Link to={"/detail-reserve"}>
              <Button
                style={{
                  width: "150px",
                  height: "60px",
                  backgroundColor: "#F6B63B",
                  borderRadius: "20px",
                }}
              >
                <Typography className="black-sm-text">
                  จองตามที่เลือก
                </Typography>
              </Button>
            </Link>
            <Link to={"/detail-reserve"}>
              <Button
                style={{
                  width: "150px",
                  height: "60px",
                  backgroundColor: "#4D5667",
                  borderRadius: "20px",
                }}
              >
                <Typography className="white-sm-text">จองทั้งโต๊ะ</Typography>
              </Button>
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
