import { Button, Image, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import liff from "@line/liff";
import useCopyToClipboard from "../../components/copy-clipboard";

import Giraffe from "../../Static/images/Giraffe.png";
import QRCode from "../../Static/images/qrcode.png";
import Swal from "sweetalert2";

import * as API from "../API";
import { getMe } from "../../config/liff";

const available = "available";
const seatAvailble = "pending";
const full = "unavailable";

export async function SingleReplyLoader({ request, params }: any) {
  try {
    const booking = await API.getBooking(params.id);
    const chairs = await API.getChairWithDeskID(booking.data.data.desk.id);

    return { chairs: chairs.data.data, booking: booking.data.data };
  } catch (e: any) {
    return { data: null };
  }
}

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

export default function SingleReplyInfoPage() {
  const [value, copy] = useCopyToClipboard();
  const { chairs, booking } = useLoaderData() as any;
  const [data, setData] = useState() as any;

  console.log("---------booking-------");

  console.log(booking);

  console.log({ chairs });

  //ENUM IN THIS PAGE
  const amountChairs = booking.desk.chairs.length;
  const pricePerChair = booking.desk.chair_price;
  const priceAllOfDesk = booking.desk.price;
  const summary = booking.total;
  const table = booking.desk.label;

  useEffect(() => {
    const fetchData = async () => {
      const data = (await getMe()) as any;
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);
  console.log("---------data-------------");

  console.log({ data });

  // const b = booking.desk.chairs_id
  //   .filter((element: any) => element.customer_id)
  //   .indexOf();

  // console.log(b);
  const a = booking.desk.chairs.map((item: any) => item.id);

  console.log(a);

  // const a = booking.desk.chairs_id
  //   .map((e: any) => e.customer_id)
  //   .indexOf(data.user.data.id);

  // console.log(a);
  const onCloseLiff = () => {
    liff.closeWindow;
  };

  // const checkCustomerId = () => {
  //   if (data.user.data.id === booking.customer.id) {
  //     return "#00B1B1";
  //   }
  // };

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

  console.log(data);

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
        ยินดีต้อนรับคุณ {booking.customer.first_name}
      </Typography>
      <div id="big-circle-detail" className="circle big-detail">
        {table}

        {chairs.map((chair: any, index: any) => (
          <div
            key={chair.id}
            className={`circle ${chair.chair_no}`}
            style={{
              background:
                a.indexOf(chair.id) > -1
                  ? "#00B1B1"
                  : exportColorWithStatus(chair.status),
            }}
          >
            {chair.label}
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
      <Typography
        className="white-header"
        style={{ marginTop: "50px", marginBottom: "30px" }}
      >
        QR Code สำหรับเข้าร่วมงาน
      </Typography>
      <Typography
        className="white-sm-text"
        style={{
          textAlign: "start",
        }}
      >
        ( ผู้ที่ชำระเงินเรียบร้อย QR CODE จะเปลี่ยน เอาไว้ใช้สำหรับเข้างาน )
      </Typography>
      <Image
        preview={false}
        width={380}
        src={
          booking.payment_status === "unpaid" ? QRCode : booking.qrcode_image
        }
      ></Image>

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
      <Button
        shape="round"
        style={{
          width: "60%",
          height: "50px",

          marginBottom: "30px",
        }}
        onClick={onCloseLiff}
      >
        <Typography className="black-text">เสร็จสิ้น</Typography>
      </Button>
    </div>
  );
}