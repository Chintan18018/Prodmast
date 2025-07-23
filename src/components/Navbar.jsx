import { Flex ,Button, Space} from 'antd'
import React from 'react';
import { Typography } from 'antd';


const { Title,Link} = Typography;

const Navbar = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Flex justify='space-around' align='center' vertical={false} gap="middle">
        <div>
            <Flex justify='center' align='center' vertical={false} gap="middle">  
             <i style={{ fontSize: '30px' }} class="ri-home-smile-fill"></i>
             <Title style={{ margin: '0px' }}>Prodmast</Title>
             </Flex>
        </div>
        <div >
            
            <Space size={50}>
               <Link href="" target="_blank" style={{ fontSize: '16px' ,color: 'black'}}>Home</Link>
                <Link href="" target="_blank" style={{ fontSize: '16px' ,color: 'black'}}>About</Link>
                <Link href="" target="_blank" style={{ fontSize: '16px' ,color: 'black'}}>Service</Link>
                <Link href="" target="_blank" style={{ fontSize: '16px' ,color: 'black'}}>Contact Us</Link>
            </Space>
        </div>
        <Button type="primary" style={{ backgroundColor: '#006666',color: 'white', padding: '20px 30px', borderRadius: '32px' }}>Sign Up</Button>
      </Flex>
    </div>
  )
}

export default Navbar
