import { Button, Card, Image, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";

import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Stage from "../../Static/images/cinema.png";
import Entrance from "../../Static/images/walking-man.png";
import Giraffe from "../../Static/images/Giraffe.png";
import Appbar from "../../components/appbar";

import * as API from "../API";
import Swal from "sweetalert2";
import { getMe } from "../../config/liff";
import { createBooking } from "../API/booking";

const available = "available";
const seatAvailble = "pending";
const full = "unavailable";

export async function ChairWithDeskLoader({ request, params }: any) {
  try {
    const chairs = await API.getChairWithDeskID(params.id);
    const data = (await getMe()) as any;
    return { chairs: chairs.data.data, me: data.user.data };
  } catch (e: any) {
    localStorage.removeItem("token");

    return { data: null };
  }
}

export default function ReserveChairPage() {
  const [selectedSeat, setSelectedSeat] = React.useState<any>([]);
  const { chairs, me } = useLoaderData() as any;
  console.log(me);

  const navigate = useNavigate();
  const location = useLocation();
  const infomation = location.state;

  console.log(location);

  const canSelectAll =
    chairs.filter((d: any) => d.status === "available").length === 10;

  console.log({ canSelectAll });

  const onButtonClick = async (mode: string) => {
    if (mode === "all") {
      setSelectedSeat(chairs.map((d: any) => d.id));
    }

    try {
      const bookingPayload = {
        customer: me.id,
        desk_id: infomation.desk_data.id,
        chairs_id: mode == "all" ? chairs.map((d: any) => d.id) : selectedSeat,
      };
      console.log({ bookingPayload });

      const res = await createBooking(bookingPayload);
      console.log({ res });

      console.log({ infomation });
    } catch (e: any) {
      return { error: e.response.data.message };
    }
  };

  const handleSelectedSeat = (id: any) => {
    let prev = selectedSeat;

    if (prev.indexOf(id) === -1) {
      setSelectedSeat([...selectedSeat, id]);
    } else {
      prev = prev.filter((c: any) => c != id);

      setSelectedSeat(prev);
    }
  };

  const exportColorWithStatus = (status: any) => {
    let color = "";
    if (status === available) {
      color = "#FFA800";
    } else if (status === seatAvailble) {
      color = "#9CB0D7";
    } else if (status === full) {
      color = "rgba(255, 202, 24, 0.4)";
    }

    return color;
  };

  return (
    <div>
      <Appbar />
      <div className="app-layout">
        <Typography
          className="white-header"
          style={{ marginTop: "44px", marginBottom: "10px" }}
        >
          ผังที่นั่งงาน ComEdu Reunion 2023
        </Typography>

        <Card size="small" style={{ marginBottom: "10px" }}>
          <Image preview={false} src={Stage} style={{ width: "40px" }} />
          <Typography className="black-text">เวที</Typography>
        </Card>
        <div id="big-circle" className="circle big">
          {infomation.desk_data.label}
          {chairs.map((d: any, index: any) => (
            <div
              key={d.name}
              className={`circle ${d.chair_no}`}
              style={{
                background:
                  selectedSeat.indexOf(d.id) > -1
                    ? "#00B1B1"
                    : exportColorWithStatus(d.status),
                cursor: d.status === available ? "pointer" : "default",
              }}
              onClick={() =>
                d.status === available ? handleSelectedSeat(d.id) : {}
              }
            >
              {d.label}
            </div>
          ))}
        </div>
        <Card size="small" style={{ marginTop: "380px" }}>
          <Image preview={false} src={Entrance} style={{ width: "40px" }} />
          <Typography className="black-text">ทางเข้า</Typography>
        </Card>
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

        <Row
          justify="start"
          align="middle"
          style={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <Card
            className="black-text"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              backgroundColor: "#00B1B1",

              borderRadius: "50%",
            }}
          ></Card>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
            }}
          >
            หมายถึง ที่นั่งนี่คุณกำลังเลือก
          </Typography>
        </Row>
        <Row
          justify="start"
          align="middle"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <Card
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              backgroundColor: "#ffa800",
              borderRadius: "50%",
            }}
          ></Card>
          <Typography
            className="white-text"
            style={{
              fontSize: "14px",
            }}
          >
            หมายถึง ที่นั่งนี้ยังว่างอยู่
          </Typography>
        </Row>

        <Row justify="start" align="middle" style={{ marginBottom: "10px" }}>
          <Card
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              backgroundColor: "   #9CB0D7",
              borderRadius: "50%",
            }}
          ></Card>
          <Typography
            className="white-text"
            style={{
              textAlign: "left",
              fontSize: "14px",
            }}
          >
            หมายถึง มีคนจองแล้วแต่ยังไม่ได้จ่ายเงิน
            <br />
            (มีโอกาสหลุดจอง)
          </Typography>
        </Row>
        <Row justify="start" align="middle">
          <Card
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              backgroundColor: "rgba(255, 202, 24, 0.4)",
              borderRadius: "50%",
            }}
          ></Card>
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
            <Button
              onClick={() => onButtonClick("selected")}
              style={{
                width: "150px",
                height: "60px",
                backgroundColor: "#F6B63B",
                borderRadius: "20px",
              }}
              disabled={!selectedSeat.length}
            >
              <Typography className="black-sm-text">จองตามที่เลือก</Typography>
            </Button>

            {infomation.desk_data.status === "available" ? (
              <Button
                onClick={() => onButtonClick("all")}
                style={{
                  width: "150px",
                  height: "60px",
                  backgroundColor: "#4D5667",
                  borderRadius: "20px",
                }}
                disabled={!canSelectAll}
              >
                <Typography className="white-sm-text">จองทั้งโต๊ะ</Typography>
              </Button>
            ) : (
              <></>
            )}
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
