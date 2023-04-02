import React, { useEffect, useState } from "react";
import { Button, Card, Image, Row, Typography } from "antd";

import Giraffe from "../../Static/images/Giraffe.png";

import "../../Static/styles/Layout.css";
import Appbar from "../../components/appbar";
import { Link, useNavigate } from "react-router-dom";
import liff from "@line/liff";

export default function Homepage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState() as any;

  useEffect(() => {
    liff
      .init({
        liffId: "1660816746-JAReyGx2", //import.meta.env.VITE_LIFF_ID,
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

  interface LiffProfile {
    displayName?: string;
    userId?: string;
    pictureUrl?: string;
  }

  function liffProfile(profile: LiffProfile): {
    name: string;
    userID: string;
    image: string;
  } {
    return {
      name: `${profile.displayName}`,
      userID: `${profile.userId}`,
      image: `${profile.pictureUrl}`,
    };
  }

  const onClick = () => {
    navigate("/register", { state: liffProfile(profile) });
  };

  return (
    <div style={{ height: "100vh" }}>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          Welcome ComEdu Reunion
        </Typography>
        <Image
          preview={false}
          width={200}
          src={Giraffe}
          style={{ marginTop: "44px" }}
        ></Image>
        <Row
          justify="center"
          align="middle"
          style={{ marginTop: "35px", marginBottom: "25px" }}
        >
          <Card
            style={{
              width: "35%",
              height: "10px",
              backgroundColor: "#F6B63B",
              marginRight: "10px",
            }}
          />
          <Typography className="yellow-text">Giffe Kun</Typography>
          <Card
            style={{
              width: "35%",
              height: "10px",
              backgroundColor: "#F6B63B",
              marginLeft: "10px",
            }}
          />
        </Row>
        <Typography className="white-text" style={{ marginBottom: "10px" }}>
          สวัสดีฮัฟเพื่อน ๆ ขอต้อนรับสู่ ComEdu Reunion
        </Typography>
        <Typography className="white-text" style={{ marginBottom: "10px" }}>
          เพื่อน ๆ สนใจเข้าร่วมงานกับเราไหม
        </Typography>
        <Typography className="white-text" style={{ marginBottom: "30px" }}>
          รอข้าอยู่ไยกด ขอจองโต๊ะ เลยนะฮัฟ
        </Typography>

        <Button
          onClick={onClick}
          style={{
            justifyContent: "center",
            width: "50%",
            height: "50px",
            backgroundColor: "#F6B63B",
            marginBottom: "90px",
          }}
        >
          <Typography className="black-text" style={{ textAlign: "center" }}>
            ลงทะเบียนเลย
          </Typography>
        </Button>
      </div>
    </div>
  );
}
