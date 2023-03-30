import { Button, Card, Image, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Stage from "../../Static/images/cinema.png";
import Entrance from "../../Static/images/walking-man.png";
import Giraffe from "../../Static/images/Giraffe.png";
import Appbar from "../../components/appbar";

export default function ReserveChairPage() {
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
        <div id="big-circle" className="circle big black-text">
          <Typography className="black-text" style={{ marginTop: "40%" }}>
            โต๊ะ A1
          </Typography>
          <div className="circle one black-text">A</div>
          <div className="circle two black-text">B</div>
          <div className="circle three black-text">C</div>
          <div className="circle four black-text">D</div>
          <div className="circle five black-text">E</div>
          <div className="circle six black-text">F</div>
          <div className="circle seven black-text">G</div>
          <div className="circle eight black-text">H</div>
          <div className="circle nine black-text">I</div>
          <div className="circle ten black-text">J</div>
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
              width: "19%",
              marginRight: "10px",
              backgroundColor: "#FFCA18",
            }}
          >
            <Typography className="black-text" style={{ fontSize: "14px" }}>
              โต๊ะ Ax
            </Typography>
          </Card>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
            }}
          >
            หมายถึง โต๊ะนี้ยังว่างอยู่
          </Typography>
        </Row>
        <Row
          justify="start"
          align="middle"
          style={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <Card
            style={{
              width: "19%",
              marginRight: "10px",
              backgroundColor: "#8598BD",
            }}
          >
            <Typography className="black-text" style={{ fontSize: "14px" }}>
              โต๊ะ Ax
            </Typography>
          </Card>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
            }}
          >
            หมายถึง โต๊ะนี้โดนจองเก้าอี้นั่งไปบ้างแล้ว
          </Typography>
        </Row>
        <Row justify="start" align="middle">
          <Card
            style={{
              width: "19%",
              marginRight: "10px",
              backgroundColor: "#FFCA18",
              opacity: "40%",
            }}
          >
            <Typography className="black-text" style={{ fontSize: "14px" }}>
              โต๊ะ Ax
            </Typography>
          </Card>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
            }}
          >
            หมายถึง โต๊ะนี้เต็มแล้ว
          </Typography>
        </Row>
        <Card size="small" style={{ marginTop: "30px" }}>
          <Row justify="space-around" align="middle">
            <div>
              <Typography className="black-header">666 คน</Typography>
              <Typography className="black-text">จำนวนผู้ลงทะเบียน</Typography>
            </div>
            <Link to={"../register"}>
              <Card
                style={{
                  width: "100%",

                  backgroundColor: "#F6B63B",
                }}
              >
                <Typography className="black-text">ลงทะเบียนเลย</Typography>
              </Card>
            </Link>
          </Row>
        </Card>
        <Link to="/reserveTable">
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
