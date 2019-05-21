import React from 'react';
import { Link, Route, BrowserRouter, Switch as Sw } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Switch } from 'antd';
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import WebApps from './Portofolio/WebApps';
import MobileApps from './Portofolio/MobileApps';
import Multimedia from './Portofolio/Multimedia';

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MainMenu extends React.Component {
  state = {
    collapsed: false,
    theme: 'dark',
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <BrowserRouter>
      <Layout style={{ minHeight: '100vh', background:'#89C4F4', }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{
              height: "32px",
              background: "rgba(255, 255, 255, 0.2)",
              margin: "16px",
            }
            } />
            <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          style={{
            marginLeft: "16px",
          }}
        />
        <br />
        <br />
          <Menu theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="inline"
          >
            <Menu.Item key="1">
            <Link to="/home">
            <Icon type="home" />
              <span>Home</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/profile">
            <Icon type="user" />
              <span>Profile</span>
            </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="folder-open" />
                  <span>Portofolio</span>
                </span>
              }
            >
              <Menu.Item key="3"><Link to="/portofolioWebApps">Web Apps</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/portofolioMobileApps">Mobile Apps</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/portofolioMultimedia">Multimedia</Link></Menu.Item>
            </SubMenu>
            {/* <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }>
              <Menu.Item key="7">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
            <Menu.Item key="7">
            <Link to="/contact">
              <Icon type="phone" />
              <span>Contact</span>
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#001529', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#001529', minHeight: 360 }}>
            <Sw>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/portofolioWebApps" component={WebApps}/>
                    <Route path="/portofolioMobileApps" component={MobileApps}/>
                    <Route path="/portofolioMultimedia" component={Multimedia}/>
            </Sw>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', height: '32px'}}>
              Manis Design ©2019 Created by IS
          </Footer>
        </Layout>
      </Layout>
      </BrowserRouter>
    );
  }
}
export default MainMenu;