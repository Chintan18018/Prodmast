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
        <Text style={{ textAlign: "center" ,fontWeight:"bolder" , marginBottom:"32px"}}>
          Expert tech to elevate your manufacturing. Let’s take business
          further.
        </Text>
      </Flex>

      <Flex justify="center" align="center" vertical={false} gap="small">
        <Button  size="large" style={{ backgroundColor: '#006666',color: 'white', padding: '30px 50px' , borderRadius: '32px',}}>Get started</Button>
        <Button  size="large" style={{ padding: '30px 50px' ,borderRadius: '32px'}}>Try now</Button>
      </Flex>

      <Space direction="vertical" align="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop:'100px', fontSize:'32px'}}>
        <div >
          <Space align="center">
            <i class="ri-star-fill" style={{ color: '#FFD54F' }}></i>
            <i class="ri-star-fill" style={{ color: '#FFD54F' }}></i>
            <i class="ri-star-fill" style={{ color: '#FFD54F' }}></i>
            <i class="ri-star-fill" style={{ color: '#FFD54F' }}></i>
            <i class="ri-star-fill" style={{ color: '#FFD54F' }}></i>
            <Text style={{ fontSize: '16px', fontWeight:"bolder" }}>5.0</Text>
          </Space>
        </div>
        <Text style={{fontSize:'24px'}}>From 80+ reviews</Text>
      </Space>

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
            style={{ flex: "1 1 200px", marginBottom: "16px" }} 
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
              backgroundColor: "#C5E1A5",
              color: "black",
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center", 
              height: "300px", 
            }}
          >
            <Space direction="vertical" size="middle" align="center" style={{ width: "100%" }}>
              <Text style={{ color: "black", fontSize: "32px" }}>6 +</Text>
              <Text level={5} style={{ color: "black", fontSize: "24px" }}>
                Years of dasboard service
              </Text>
            </Space>
          </Card>
          {/* Card 5 */}
          

          <Card hoverable
            style={{
              flex: "1 1 200px",
              marginBottom: "16px",
              backgroundColor: "#006666",
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "flex-end", 
              height: "400px", 
            }}>
            <Text  style={{  fontSize: "24px" ,color: "white",}}>
                Our estimated clients and partners
              </Text>
          </Card>
        </Flex>
      </div>
    </div>
  );
};

export default HeroComp;
