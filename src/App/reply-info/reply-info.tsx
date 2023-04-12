import { Button, Card, Image, List, Row, Typography } from "antd";

import Giraffe from "../../Static/images/Giraffe.png";

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useCopyToClipboard from "../../components/copy-clipboard";
import Swal from "sweetalert2";
import Appbar from "../../components/appbar";
import { getMe } from "../../config/liff";
import * as API from "../API";

//ENUM IN THIS PAGE
const amountChairs = 2;
const pricePerChair = 360;
const priceAllOfDesk = 3200;
const summary = amountChairs * pricePerChair;
const table = "A3";
const chairs = "A,B";

export async function AllBookingLoader({ request, params }: any) {
  try {
    const allBooking = await API.getAllBooking(params.id);
    const data = await getMe();

    return {
      allBooking: allBooking.data.data,
      data: data?.user.data,
    };
  } catch (e: any) {
    return { data: null };
  }
}

const mockData = [
  {
    table: "A1",
    createAt: "2023-04-09T20:59:28.498Z",
    status: "pending",
  },

  {
    table: "B1",
    createAt: "2023-04-09T15:58:47.163Z",
    status: "pending",
  },
];

export default function ReplyInfoPage() {
  const navigate = useNavigate();
  const { allBooking, data } = useLoaderData() as any;
  // const [data, setData] = useState() as any;

  console.log("-----all------");
  console.log({ allBooking });
  // console.log("-----booking------");
  // console.log({ booking });
  console.log("-----data------");
  console.log({ data });

  // const bookings = allBooking.map((item: any) => );

  // console.log("-------booking-------");

  // console.log(bookings);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(data);
  //     setData(data);
  //   };

  //   fetchData();
  // }, []);
  const onClickWithId = (id: any) => {
    navigate(`/single-reply-info/${id}`);
  };

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

  const [value, copy] = useCopyToClipboard();
  return (
    <div>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          ข้อมูลผู้จอง
        </Typography>

        <div>
          <Typography
            className="white-text"
            style={{
              marginTop: "27px",
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            ชื่อ
          </Typography>
          <Card
            size="small"
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography className="yellow-text">
              {/* {profile.displayName} */}
              {data.first_name}
            </Typography>
          </Card>
        </div>
        <div>
          <Typography
            className="white-text"
            style={{
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            นามสกุล
          </Typography>
          <Card
            size="small"
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography className="yellow-text">
              {/* {profile.displayName} */}
              {data.last_name}
            </Typography>
          </Card>
        </div>
        <div>
          <Typography
            className="white-text"
            style={{
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            เบอร์โทรศัพท์
          </Typography>
          <Card
            size="small"
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography className="yellow-text">{data.tel}</Typography>
          </Card>
        </div>
        <div>
          <Typography
            className="white-text"
            style={{
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            สถานที่ทำงาน
          </Typography>
          <Card
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            <Typography className="yellow-text">{data.information}</Typography>
          </Card>
        </div>
        <div>
          <Typography
            className="white-text"
            style={{
              marginBottom: "5px",
              textAlign: "start",
            }}
          >
            อีเมล
          </Typography>
          <Card
            size="small"
            className="normal-text"
            style={{
              backgroundColor: "#677185",
              textAlign: "start",
              marginBottom: "30px",
            }}
          >
            <Typography className="yellow-text">{data.email}</Typography>
          </Card>
        </div>
        <Typography className="white-header" style={{ marginTop: "44px" }}>
          รายละเอียดการจองโต๊ะ
        </Typography>
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
          <div style={{ width: "70%" }}>
            <Typography className="yellow-text" style={{ fontSize: "14px" }}>
              Giffe Kun
            </Typography>
            <Typography
              className="yellow-text"
              style={{ fontSize: "14px", marginTop: "10px" }}
            >
              (สถานะการชำระเงิน : ยังไม่ได้ชำระ)
            </Typography>
            <Typography
              className="white-text"
              style={{
                fontSize: "14px",
              }}
            >
              “ถ้าชำระเงินสำเร็จแล้ว รบกวนส่งรูปภาพ สลิปด้วยนะฮัฟ
            </Typography>

            <Typography className="yellow-text" style={{ fontSize: "14px" }}>
              สามารถส่งได้ที่หน้า Line OA ได้เลยฮัฟผม”
            </Typography>
          </div>
        </Row>

        <List
          size="small"
          header={
            <div>
              <Typography
                className="white-header text-shadow "
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                การจองของคุณ
              </Typography>
              <Card
                size="small"
                style={{ width: "100%", backgroundColor: "#303E57" }}
              >
                <Row justify="space-between" align="middle">
                  <Typography className="yellow-header">สถานะ</Typography>
                  <Typography className="yellow-header">วันที่จอง</Typography>
                  <Typography className="yellow-header">โต๊ะ</Typography>
                </Row>
              </Card>
            </div>
          }
          footer
          style={{ marginTop: "30px", backgroundColor: "#677185" }}
          bordered
          dataSource={allBooking}
          renderItem={(data: any) => (
            <List.Item>
              <Button
                size="large"
                style={{ width: "100%" }}
                onClick={() => onClickWithId(data.id)}
              >
                <Row justify="space-between" align="middle">
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "18%",
                    }}
                  >
                    <Typography className="black-text">
                      {data.status}
                    </Typography>
                  </div>
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "65%",
                    }}
                  >
                    <Typography className="black-text">
                      {data.created_at}
                    </Typography>
                  </div>
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "10%",
                    }}
                  >
                    <Typography className="black-text">
                      {data.desk.label}
                    </Typography>
                  </div>
                </Row>
              </Button>
            </List.Item>
          )}
        />
        <Link to="/">
          <Button
            shape="round"
            style={{
              width: "60%",
              height: "50px",
              marginTop: "30px",
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
