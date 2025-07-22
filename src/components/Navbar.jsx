import { Flex ,Button} from 'antd'
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
        <div>
            <Flex justify='center' align='center' vertical={false} gap="middle" style={{ fontSize: '24px' ,color: 'black'}}>
                <Link href="" target="_blank">Home</Link>
                <Link href="" target="_blank">About</Link>
                <Link href="" target="_blank">Service</Link>
                <Link href="" target="_blank">Contact Us</Link>
            </Flex>
        </div>
        <Button type="primary" style={{ backgroundColor: '#006666',color: 'white', padding: '20px' }}>Sign Up</Button>
      </Flex>
    </div>
  )
}

export default Navbar
