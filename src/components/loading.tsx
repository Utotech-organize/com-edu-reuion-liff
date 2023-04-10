import { Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function LoadingPage() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 100,
        color: "#FFA800",
        marginBottom: "20px",
      }}
      spin
    />
  );

  const CustomSpinner = () => <Spin indicator={antIcon} />;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {CustomSpinner()}
        <Typography
          className="yellow-header text-shadow"
          style={{ fontSize: "30px" }}
        >
          กำลังโหลด
        </Typography>
      </div>
    </div>
  );
}
