import React, {Component} from 'react';
import { Row,Col,Typography} from 'antd';
import FotoBio from './bio.jpg';
import Typing from 'react-typing-animation';

const { Title } = Typography;

class HomeCard extends Component {
    render(){
        return(
            <div>
                <Row
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }} justify="center"                 
                 >
                    <Col xs={12}>
                    <Row style={{ margin: '16px 16px'}}>
                    <Typing speed={200}>
                            <Title level={1} style={{color:"#fff"}}>Hello!</Title><Typing.Delay ms={1000}/>
                            <br></br>
                            <Title level={1} style={{color:"#fff"}}>Namaku<Typing.Delay ms={1000}/><Typing.Backspace count={6}/> My Name Is</Title><Typing.Delay ms={2000}/>
                            <br></br>
                            <Title level={1} style={{color:"#fff"}}>Ilham Satriadi</Title><Typing.Delay ms={1000}/>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <h3>I have passion and skill at Web and Android Development. I am Front-end Developer expert.</h3>
                    </Typing>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row >
                            <img src={FotoBio} style={{objectFit:"cover", width:"100%", height:"100%" }}/>
                        </Row>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default HomeCard;