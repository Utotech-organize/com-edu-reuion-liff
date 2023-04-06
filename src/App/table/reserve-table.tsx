import { Button, Card, Col, Image, Row, Typography } from "antd";
import Appbar from "../../components/appbar";
import Stage from "../../Static/images/cinema.png";
import Entrance from "../../Static/images/walking-man.png";
import Giraffe from "../../Static/images/Giraffe.png";
import { Link, useLoaderData, useLocation } from "react-router-dom";

import * as API from "../API";
import { useEffect, useState } from "react";
import liff from "@line/liff";

const available = "available";
const seatAvailble = "pending";
const full = "unavailable";

export async function DesksIndexLoader({ request, params }: any) {
  try {
    const desks = await API.getDesks();
    // console.log(desks.data);

    return { desks: desks.data.data };
  } catch (e: any) {
    localStorage.removeItem("token");

    // return redirect("/login");
    return { data: null };
  }
}

export default function ReserveTablePage(props: any) {
  const location = useLocation();
  const infomation = location.state;
  const [profile, setProfile] = useState() as any;
  const { desks } = useLoaderData() as any;

  useEffect(() => {
    liff
      .init({
        liffId: "1660816746-JAReyGx2", //import.meta.env.VITE_LIFF_ID, //FIXME create env
        withLoginOnExternalBrowser: true,
      })
      .then(async () => {
        console.log("LIFF init succeeded.");
        console.log("get profile :" + (await liff.getProfile()));
        console.log(await liff.getProfile());

        const profileData = await liff.getProfile();

        setProfile(profileData);
      })
      .catch((e: Error) => {
        console.log("LIFF init failed.");
        console.log(`${e}`);
      });
  }, []);

  const exportColorWithStatus = (status: any) => {
    let color = "";
    if (status === available) {
      color = "#FFCA18";
    } else if (status === seatAvailble) {
      color = "#8598BD";
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
          <Image preview={false} src={Stage} style={{ width: "40px" }}></Image>
          <Typography className="black-text">เวที</Typography>
        </Card>

        <div className="grid-container">
          {desks.map((d: any, index: any) => (
            <div key={d.id} className="grid-item">
              <Link
                to={`../reserve-chair/${d.id}`}
                state={{
                  desk_data: d,
                  profile: profile,
                }}
              >
                <div
                  className="seat black-sm-text"
                  style={{
                    width: "100%",
                    height: "70px",
                    color: "#000000",
                    background: exportColorWithStatus(d.status),
                  }}
                >
                  โต๊ะ
                  <br />
                  {d.label}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Card size="small" style={{ marginTop: "10px" }}>
          <Image
            preview={false}
            src={Entrance}
            style={{ width: "40px" }}
          ></Image>
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
