import React from 'react'
import {useHistory,Link,useParams} from 'react-router-dom';
import { Layout, Menu,Avatar,Dropdown} from 'antd';
import { UserOutlined, LaptopOutlined, FormOutlined ,DownOutlined,DeleteOutlined,StarOutlined,HeartOutlined } from '@ant-design/icons';
import './dashboard.css';
import Body from './body';
import {Auth} from '../../context/AuthContext';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Dashboard(props){

    function signOut(){
        logout();
        history.push('/login');
      }
      const history=useHistory();
      const {logout,CurrentUser} =Auth();
    const menu = (
        <Menu>
  
          <Menu.Item key="0">
            <a href="">Help</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a onClick={()=>signOut()} style={{color:"red"}}>LogOut</a>
          </Menu.Item>
          
        </Menu>
      );

    return(
        <Layout>
        <Header className="header">
        <div className="logo" />
          <Menu theme="dark" mode="horizontal" >
              
              <h2><b style={{color:"white"}}>Puppy Love</b></h2>
              <Avatar style={{ backgroundColor: '#87d068'}} icon={<UserOutlined />} style={{marginTop:15,marginLeft:1120}}>Welcome</Avatar>
              <Dropdown overlay={menu} trigger={['click']} >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()} >
                  {CurrentUser && CurrentUser.displayName} <DownOutlined />
                </a>
              </Dropdown>
          </Menu>
        </Header>

    <Layout>
        <Sider width={200} className="site-layout-background" >
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
          >
          <Menu.Item key="1" icon={<LaptopOutlined />} >Your Profile</Menu.Item>
          <Menu.Item key="2" icon={<HeartOutlined />}  >Your hearts</Menu.Item>
          <Menu.Item key="3" icon={<StarOutlined />} >Favourites</Menu.Item>
          {/* <Menu.Item key="4" icon={<DeleteOutlined />} ></Menu.Item> */}

      </Menu>
    </Sider>

<Layout style={{ padding: '0 24px 24px' }}>
<Content
  className="site-layout-background"
  style={{
    padding: 24,
    margin: 0,
    minHeight: 280,
  }}
>
 <Body/>
</Content>
</Layout>
</Layout>
</Layout>
    );
}



