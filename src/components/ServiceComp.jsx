import React from "react";
import { Typography } from "antd";
const { Title } = Typography;
import { Flex, Button } from "antd";
import { Card, Col, Row } from "antd";

const ServiceComp = () => {
  const cardsData = [
    {
      id: 1,
      icon1: "ri-sun-line",
      icon2: "ri-moon-line",
      bgColor: "#00664d",
      content: "Card 1 Description",
      content2:
        "Simplify organizaion  with our efficient qaulity focused services and Manufacturing services",
    },
    {
      id: 2,
      icon1: "ri-cloud-line",
      icon2: "ri-sun-line",
      bgColor: "#004d33",
      content: "Card 2 Description",
      content2:
        "Simplify organizaion  with our efficient qaulity focused services and Manufacturing services",
    },
    {
      id: 3,
      icon1: "ri-sun-line",
      icon2: "ri-cloud-line",
      bgColor: "#003324",
      content: "Card 3 Description",
      content2:
        "Simplify organizaion  with our efficient qaulity focused services and Manufacturing services",
    },
    {
      id: 4,
      icon1: "ri-moon-line",
      icon2: "ri-sun-line",
      bgColor: "#00664d",
      content: "Card 4 Description",
      content2:
        "Simplify organizaion  with our efficient qaulity focused services and Manufacturing services",
    },
    {
      id: 5,
      icon1: "ri-cloud-line",
      icon2: "ri-moon-line",
      bgColor: "#004d33",
      content: "Card 5 Description",
      content2:
        "Simplify organizaion  with our efficient qaulity focused services and Manufacturing services",
    },
    {
      id: 6,
      icon1: "ri-sun-line",
      icon2: "ri-cloud-line",
      bgColor: "#003324",
      content: "Card 6 Description",
      content2:
        "Simplify organizaion  with our efficient qaulity focused services and Manufacturing services",
    },
  ];
  return (
    <div
      style={{ backgroundColor: "#006666", color: "white", padding: "20px" }}
    >
      <Flex justify="center" align="center" vertical={true} gap="middle">
        <Title
          style={{ color: "white", paddingTop: "100px", marginBottom: "0px" }}
        >
          Efficient and Integrated
        </Title>
        <Title style={{ color: "white", marginTop: "0px" }}>
          Manufacturing services
        </Title>
        <Title level={5} style={{ color: "white" }}>
          Simplify organizaion with our efficient qaulity focused services
        </Title>
      </Flex>

      <div style={{ margin: "20px" }}>
        <Row gutter={16}>
          {cardsData.map((card) => (
            <Col span={8} key={card.id}>
              <Card style={{ backgroundColor: card.bgColor, padding: "20px" }}>
                <Flex vertical={true} style={{ height: "100%" }}>
                  {/* Icons at the top */}
                  <Flex
                    justify="space-between"
                    style={{ marginBottom: "20px" }}
                  >
                    <i
                      className={card.icon1}
                      style={{ color: "white", fontSize: "30px" }}
                    ></i>
                    <i
                      className={card.icon2}
                      style={{ color: "white", fontSize: "30px" }}
                    ></i>
                  </Flex>

                  {/* Description at the bottom */}
                  <div
                    style={{
                      color: "white",
                      textAlign: "left",
                      paddingTop: "50px",
                      paddingLeft: "20px"
                    }}
                  >
                    <h2>{card.content}</h2>
                    <p>{card.content2}</p>
                  </div>
                </Flex>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServiceComp;
