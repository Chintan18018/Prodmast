import React from 'react';
import { Flex, Typography, Card } from 'antd';

const { Title } = Typography;

const HeroComp = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      {/* Hero Section */}
      <Flex justify="center" align="center" vertical={true} gap="small">
        <Title>The Future of Manufacturing</Title>
        <Title level={2}>With <span style={{ color: '#1677ff' }}>Latest Technology</span></Title>
        <Title level={5} style={{ textAlign: 'center' }}>
          Expert tech to elevate your manufacturing. Let’s take business further.
        </Title>
      </Flex>

      {/* Cards Section */}
      <div style={{ marginTop: '40px' ,marginLeft: '100px',marginRight: '100px',}}>
        <Flex
          justify="space-between"
          wrap="wrap"
          gap="16px"
          style={{ width: '100%' }}
        >
          {/* Card 1 */}
          <Card
            hoverable
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            style={{ flex: '1 1 200px', marginBottom: '16px' }} // Flex item without fixed width
          />
          {/* Card 2 */}
          <Card hoverable style={{ flex: '1 1 200px', marginBottom: '16px' ,backgroundColor: '#006666',color: 'white'}}>
            <Flex justify='end' align='center' vertical={true}  gap="middle">
            <Title level={2} style={{ color: 'white' }}>100 +</Title>
            <Title level={5} style={{ color: 'white' }}>Our estimated clients and partners</Title>
            </Flex>
          </Card>
          {/* Card 3 */}
          <Card hoverable style={{ flex: '1 1 200px', marginBottom: '16px' }}>
            
            <Flex justify='space-between' align='center' vertical={false} gap="middle">
                <i class="ri-menu-line"></i><i class="ri-layout-fill"></i>
            </Flex>
            <Flex justify='center' align='center' vertical={true} gap="middle" style={{  marginTop: '16px' }}>
            <Title level={5} >Total projects</Title>
            <Title level={2}>1000 +</Title>
            <Title level={5}>Increse of 12%</Title>
            </Flex>
          </Card>
          {/* Card 4 */}
          <Card hoverable style={{ flex: '1 1 200px', marginBottom: '16px' ,backgroundColor: '#006666',color: 'white'}}>
             <Flex justify='center' align='center' vertical={true} gap="middle">
            <Title level={2} style={{ color: 'white' }}>100 +</Title>
            <Title level={5} style={{ color: 'white' }}>Our estimated clients and partners</Title>
            </Flex>
          </Card>
          {/* Card 5 */}
          <Card
            hoverable
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            style={{ flex: '1 1 200px', marginBottom: '16px' }} // Flex item without fixed width
          />
        </Flex>
      </div>
    </div>
  );
}

export default HeroComp;
