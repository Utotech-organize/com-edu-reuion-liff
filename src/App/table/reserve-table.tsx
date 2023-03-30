import React from "react";
import { Button, Card, Col, Image, Row, Typography } from "antd";
import Appbar from "../../components/appbar";
import Stage from "../../Static/images/cinema.png";
import Entrance from "../../Static/images/walking-man.png";
import Giraffe from "../../Static/images/Giraffe.png";
import { Link } from "react-router-dom";

export default function ReserveTablePage() {
  const table = ["โต๊ะ A1", "โต๊ะ A2", "โต๊ะ A3", "โต๊ะ A4", "โต๊ะ A5"];
  table.map(cardTable);

  function cardTable(key: any) {
    // return <Card style={{ width: "18%" }}>{table[idx].length}</Card>;
    // return (
    //   <Link to={"../reserveChair"}>
    //     <Card style={{ width: "18%" }}>{table[0]}</Card>
    //   </Link>
    // );
  }

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
          <Image preview={false} src={Stage} style={{ width: "40px" }}></Image>
          <Typography className="black-text">เวที</Typography>
        </Card>
        {
          // FIXME
        }
        <Row justify="space-between">
          <Link to={"../reserveChair"}>
            <Card style={{ width: "80%" }}>โต๊ะ A1</Card>
          </Link>
        </Row>
        <Card size="small" style={{ marginTop: "10px" }}>
          <Image
            preview={false}
            src={Entrance}
            style={{ width: "40px" }}
          ></Image>
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
          <Image preview={false} width={80} src={Giraffe}></Image>
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
              กดเลือกโต๊ะที่ต้องการเพื่อทำการเลือกเก้าอี้ ด้วยนะฮัฟ
            </Typography>
            <Typography className="yellow-text" style={{ fontSize: "14px" }}>
              A1 หรือ เลขอื่นๆ คือหมายเลขโต๊ะนะฮัฟ
            </Typography>
          </div>
        </Row>
        <Typography className="white-text" style={{ textAlign: "start" }}>
          รายละเอียดการจองโต๊ะ
        </Typography>
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
        <Link to="/">
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
