import { Button, Card, Image, Row, Typography } from "antd";
import React, { useState } from "react";

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

const available = "available";
const seatAvailble = "pending";
const full = "unavailable";

export async function ChairWithDeskLoader({ request, params }: any) {
  try {
    const chairs = await API.getChairWithDeskID(params.id);

    return { chairs: chairs.data.data };
  } catch (e: any) {
    localStorage.removeItem("token");

    return { data: null };
  }
}

export default function ReserveChairPage() {
  const [selectedSeat, setSelectedSeat] = React.useState<any>([]);
  const { chairs } = useLoaderData() as any;
  const navigate = useNavigate();
  const location = useLocation();
  const infomation = location.state;

  const onButtonClick = async () => {
    if (selectedSeat.length !== 0) {
      // try {
      //FIXME
      const res = await API.getCustomerWithLiffID(
        "U7cacfddcc2cc56f99724e5eb93eae391"
      );
      console.log(res);

      // const updateData = {
      //   id: customerData.data.id,
      //   line_liff_id: customerData.data.line_liff_id,
      //   line_display_name: customerData.data.line_display_name,
      //   line_photo_url: customerData.data.line_photo_url,
      //   tel: customerData.data.tel,
      //   name: customerData.data.name,
      //   information: customerData.data.information,
      //   email: customerData.data.email,
      //   chairs: selectedSeat,
      // };

      // const { data: customerUpdateData } = await API.updateCustomer(
      //   updateData
      // );

      // navigate("/detail-reserve", { state: customerData });
      // } catch (e: any) {
      //   return { error: e.response.data.message };
      // }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const onReserveAllClick = async () => {
    try {
      //FIXME
      const { data: customerData } = await API.getCustomerWithLiffID(
        infomation.profile.userId
      );
      const result = chairs.map((item: any) => item.id);

      const updateData = {
        id: customerData.data.id,
        line_liff_id: customerData.data.line_liff_id,
        line_display_name: customerData.data.line_display_name,
        line_photo_url: customerData.data.line_photo_url,
        tel: customerData.data.tel,
        name: customerData.data.name,
        information: customerData.data.information,
        email: customerData.data.email,
        chairs: result,
      };

      const { data: customerUpdateData } = await API.updateCustomer(updateData);

      navigate("/detail-reserve", { state: customerData });
    } catch (e: any) {
      return { error: e.response.data.message };
    }
  };

  const handleAllChair = () => {
    const result = chairs.map((item: any) => item.id);
    console.log({ result });
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
              onClick={onButtonClick}
              style={{
                width: "150px",
                height: "60px",
                backgroundColor: "#F6B63B",
                borderRadius: "20px",
              }}
            >
              <Typography className="black-sm-text">จองตามที่เลือก</Typography>
            </Button>

            {infomation.desk_data.status === "available" ? (
              <Button
                onClick={onReserveAllClick}
                style={{
                  width: "150px",
                  height: "60px",
                  backgroundColor: "#4D5667",
                  borderRadius: "20px",
                }}
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
