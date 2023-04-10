import { Card, Form, Image, Input, List, Row, Typography } from "antd";
import Appbar from "../../components/appbar";
import Giraffe from "../../Static/images/Giraffe.png";

const mockData = [
  {
    table: "A1",
    chair: "a",
  },
  {
    table: "A1",
    chair: "b",
  },
  {
    table: "A1",
    chair: "c",
  },
  {
    table: "A1",
    chair: "d",
  },
  {
    table: "B1",
    chair: "a",
  },
];

export default function OrderPage() {
  return (
    <div>
      <Appbar />
      <div className="app-layout">
        <Typography className="white-header" style={{ marginBottom: "20px" }}>
          สั่งของในงาน
        </Typography>
        <List
          size="large"
          dataSource={mockData}
          renderItem={(item) => (
            <List.Item>
              <Card size="small" style={{ width: "100%", height: "120px" }}>
                <Row justify="space-between" align="middle">
                  <div style={{}}>
                    <Image
                      preview={false}
                      width={50}
                      src={Giraffe}
                      style={{ padding: "1px" }}
                    ></Image>
                  </div>
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "70%",
                      height: "35px",
                    }}
                  >
                    <Typography className="black-text">{item.chair}</Typography>
                  </div>
                  <div
                    style={{
                      borderStyle: "groove",
                      width: "10%",
                      height: "35px",
                    }}
                  >
                    <Typography className="black-text">{item.table}</Typography>
                  </div>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
