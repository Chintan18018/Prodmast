import React from "react";
import { Flex, Typography, Card, Space ,Button} from "antd";

const { Title, Text } = Typography;

const HeroComp = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      {/* Hero Section */}
      <Flex justify="center" align="center" vertical={true} gap="small">
        <Title>The Future of Manufacturing</Title>
        <Text style={{ fontSize: '32px', fontWeight: 'bold' }}>
          With <span style={{ color: "#006666" }}>Latest Technology</span>
        </Text>
        <Title level={5} style={{ textAlign: "center" }}>
          Expert tech to elevate your manufacturing. Let’s take business
          further.
        </Title>
      </Flex>

      <Flex justify="center" align="center" vertical={false} gap="small">
        <Button  size="large" style={{ backgroundColor: '#006666',color: 'white', padding: '30px' }}>Get started</Button>
        <Button  size="large" style={{ padding: '30px' }}>Try now</Button>
      </Flex>

      {/* Cards Section */}
      <div
        style={{ marginTop: "40px", marginLeft: "100px", marginRight: "100px" }}
      >
        <Flex
          justify="space-between"
          align="flex-end"
          wrap="wrap"
          gap="16px"
          style={{ width: "100%" }}
        >
          {/* Card 1 */}
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
            style={{ flex: "1 1 200px", marginBottom: "16px" }} // Flex item without fixed width
          />
          {/* Card 2 */}
          <Card
            hoverable
            style={{
              flex: "1 1 200px",
              marginBottom: "16px",
              backgroundColor: "#006666",
              color: "white",
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "flex-end", 
              height: "300px", 
            }}
          >
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Text style={{ color: "white", fontSize: "32px" }}>100 +</Text>
              <Text level={5} style={{ color: "white", fontSize: "24px" }}>
                Our estimated clients and partners
              </Text>
            </Space>
          </Card>

          {/* Card 3 */}
          <Card hoverable style={{ flex: "1 1 200px", marginBottom: "16px" }}>
            <Flex
              justify="space-between"
              align="center"
              vertical={false}
              gap="middle"
              style={{ fontSize: "24px" }}
            >
              <i class="ri-menu-line"></i>
              <i class="ri-layout-fill"></i>
            </Flex>
            <Flex
              justify="center"
              align="center"
              vertical={true}
              gap="middle"
              style={{ marginTop: "16px" }}
            >
              <Title level={5}>Total projects</Title>
              <Text style={{ fontSize: "24px" }}>1000 +</Text>
              <Title level={5}>Increse of 12%</Title>
            </Flex>
          </Card>
          {/* Card 4 */}
          <Card
            hoverable
            style={{
              flex: "1 1 200px",
              marginBottom: "16px",
              backgroundColor: "#006666",
              color: "white",
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "flex-end", 
              height: "300px", 
            }}
          >
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Text style={{ color: "white", fontSize: "32px" }}>100 +</Text>
              <Text level={5} style={{ color: "white", fontSize: "24px" }}>
                Our estimated clients and partners
              </Text>
            </Space>
          </Card>
          {/* Card 5 */}
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
            style={{ flex: "1 1 200px", marginBottom: "16px" }} // Flex item without fixed width
          />
        </Flex>
      </div>
    </div>
  );
};

export default HeroComp;
