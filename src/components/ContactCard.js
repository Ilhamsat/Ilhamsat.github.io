import React, {Component} from 'react';
import { Row, Col, Typography, Card, Form, Icon, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { message, Button } from 'antd';

const { Title } = Typography;

const success = () => {
    message.success('Success!!! Your message was sent. I will contact you as soon as posible.', 10);
  };

class ContactCard extends Component {
    render() {
        return (
            <div>
                <Row 
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    >
                    {/* Kolom konten contact */}
                    <Col xs={8} style={{ padding:"20px" }}>
                    <h1 style={{textAlign:"left", paddingTop:150}}>Maps Coming Soon!</h1>
                    </Col>
                    <Col xs={10}>
                    <Row style={{ margin: '16px 16px'}}>
                            <Card bordered={false} style={{ width: 500, height: 480, background:"#001529"}}>
                            <div style={{ width: 300, color:"#fff" }}>
                            <h1>Contact Me!</h1>
                            </div>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    <Input 
                                        style={{marginBottom: "18px" }}
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                        placeholder="Nama"
                                    />
                                    <Input 
                                        style={{marginBottom: "18px" }}
                                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                        placeholder="Email"
                                    />
                                    <Input 
                                        style={{marginBottom: "18px" }}
                                        prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                        placeholder="Number"
                                    />
                                    <TextArea 
                                        style={{marginBottom: "18px" }}
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                        placeholder="Message"
                                    />
                                    <Button onClick={success} type="primary" htmlType="submit" className="login-form-button">
                                        Send
                                    </Button>
                                </Form.Item>
                            </Form>
                            </Card>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Row style={{ margin: '16px 16px', textAlign:"right", color:"#fff", paddingRight:'30px' }}>
                            <Title level={3} style={{color:"#fff"}}>Address</Title>
                            <span style={{color:"#fff"}}>Pogung Dalangan, Yogyakarta</span>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Title level={3} style={{color:"#fff"}}>Phone Number</Title>
                            <span style={{color:"#fff"}}>+6281347591227</span>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Title level={3} style={{color:"#fff"}}>Email</Title>
                            <span style={{color:"#fff"}}>ilhamsatriadi10@gmail.com</span>
                            <br></br>
                            <span style={{color:"#fff"}}>ilhamsatriadi@mail.ugm.ac.id</span>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Title level={3} style={{color:"#fff"}}>Social</Title>
                            <a href="https://www.instagram.com/ilham_satriadi/">
                            <Icon type="instagram"/>
                            </a>
                            <span> | </span> 
                            <a href="https://github.com/Ilhamsat">
                            <Icon type="github" />
                            </a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContactCard;