import React from "react";

import { CloseOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Row, Typography } from "antd";

export default function Appbar() {
  return (
    <div className="appbar">
      <div
        style={{
          paddingRight: "0px",
          width: "100%",
          height: "50px",
          backgroundColor: "#1E1E1E",
        }}
      >
        <Row
          justify="space-between"
          style={{ paddingTop: "2%", marginLeft: "10px", marginRight: "10px" }}
        >
          <Typography className="white-header">ComEdu Reunion</Typography>
          <Row>
            <ShareAltOutlined
              style={{ fontSize: "30px", color: "white", marginRight: "10px" }}
            />
            <CloseOutlined style={{ fontSize: "30px", color: "white" }} />
          </Row>
        </Row>
      </div>
    </div>
  );
}
