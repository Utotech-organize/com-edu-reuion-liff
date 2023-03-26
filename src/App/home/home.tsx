import React from "react";
import { Image } from "antd";

import Giraffe from "../../Static/images/Giraffe.png";

import "../../Static/styles/Layout.css";

export default function Homepage() {
  return (
    <div className="">
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#1E1E1E",
          color: "white",
        }}
      >
        App Bar
      </div>
      <h1 style={{ color: "#ffffff" }}>Welcome ComEdu Reunion</h1>
      <Image width={100} src={Giraffe}></Image>
    </div>
  );
}
