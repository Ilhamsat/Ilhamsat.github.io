import React, {Component} from 'react';
import { Row,Col,Typography,List } from 'antd';
import {Icon} from 'antd';
import Tempodoeloe from './tempodoeloe.jpg';
import Iceberg from './iceberg.png';

const { Title } = Typography;
const data = [
    { name:'Name',icons:'contacts',content:"Ilham Satriadi"},
    { name:'Date of birth',icons:'calendar',content:"October 20, 1999"},
    { name:'Address',icons:'environment',content:"Pogung Dalangan, Yogyakarta"},
    { name:'Phone',icons:'phone',content:"+62 813-4759-1227"},
    { name:'Email',icons:'mail',content:"ilhamsatriadi10@gmail.com"},
  ];

class ProfileCard extends Component {
    render() {
        return (
            <div>
                 <Row
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        paddingBottom: "0px",
                    }}                 
                 >
                    <Col xs={12}>
                        <Row>
                            <img src={Tempodoeloe} style={{objectFit:"cover",width:"100%"}}/>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row style={{ margin: '16px 16px', textAlign:"left", color:"#fff" }}>
                            <Col xs><Title style={{color:"#fff"}}>Ilham Satriadi</Title></Col>
                            <List
                                size="large"
                                // header={<div>Header</div>}
                                // footer={<div>Footer</div>}
                                // bordered
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item style={{color:"#fff"}}>
                                        <Icon type={item.icons} theme="filled"/> &nbsp;&nbsp; &nbsp;
                                        <Typography.Text strong style={{color:"#fff"}}>{item.name} : </Typography.Text> {item.content}
                                    </List.Item>
                                )}
                            />
                            <p/>
                            <Col xs><Title level={4} style={{color:"#fff"}}>About me</Title></Col>
                            <Col xs>Advanced web and android developer with 2 years of experience in structuring, developing & implementing interactive website or mobile apps with the best use of technology.</Col>
                            <img src={Iceberg} style={{width:"80%"}}/>
                        </Row>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default ProfileCard;