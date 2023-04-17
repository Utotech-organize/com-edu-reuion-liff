import { Button, Card, Image, List, Row, Typography } from "antd";
import Appbar from "../../components/appbar";

import { AppstoreAddOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const mockData = [
  {
    id: 1,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 2,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 3,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 4,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 5,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 6,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 7,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 8,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 9,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
  {
    id: 10,
    image:
      "https://www.tipawanfood.com/wp-content/uploads/2015/09/202-%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%AA%E0%B8%A1.jpg",
    label: "โซดา",
    price: "20",
  },
];

export default function CartPage() {
  const lineName = "P2W";
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Appbar />

      <div className="app-layout">
        <Row justify="space-between">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "grey",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {}}
          >
            <AppstoreAddOutlined style={{ fontSize: "30px" }} />
          </div>

          <Row align="middle">
            <Typography className="black-text"> {lineName}</Typography>
            <div
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "10px",
                backgroundColor: "grey",
                borderRadius: "30px",
              }}
            ></div>
          </Row>
        </Row>

        <Typography className="white-header" style={{ marginBottom: "20px" }}>
          ของที่เลือก
        </Typography>
        <List
          size="small"
          style={{ marginTop: "30px" }}
          dataSource={mockData}
          renderItem={(data: any) => (
            <List.Item>
              <div style={{ width: "100%", backgroundColor: "white" }}>
                <Row justify="space-between" align="middle">
                  <div
                    style={{
                      width: "60%",
                    }}
                  >
                    <Typography className="black-text">{data.label}</Typography>
                  </div>
                  <Typography className="black-text">1</Typography>
                  <Button>
                    <div>
                      <Typography className="black-text">เพิ่ม</Typography>
                    </div>
                  </Button>
                  <Button>
                    <div>
                      <Typography className="black-text">ลบ</Typography>
                    </div>
                  </Button>
                </Row>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
