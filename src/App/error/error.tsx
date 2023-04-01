import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Appbar from "../../components/appbar";

import Giraffe from "../../Static/images/Giraffe.png";
import { Image, Row, Typography } from "antd";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div style={{ height: "100vh" }}>
      <Appbar />
      <div className="app-layout">
        <Row
          justify="center"
          align="middle"
          style={{ marginTop: "30vh", marginBottom: "20px" }}
        >
          <Image preview={false} width={80} src={Giraffe} />
          <Typography
            className="text-shadow normal-text"
            style={{ fontSize: "60px", color: "white", marginLeft: "30px" }}
          >
            ERROR
          </Typography>
        </Row>

        <Typography className="white-header text-shadow">
          ขออภัยด้วยฮัฟ เกิดปัญหานิดหน่อย จะลองเช็คดูให้นะฮัฟ
        </Typography>
      </div>
    </div>
  );
}
