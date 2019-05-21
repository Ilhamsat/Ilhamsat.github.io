import React, {Component} from 'react';
import { Timeline } from 'antd';
import { Card } from 'antd';

class Experience extends Component{
    render(){
        return(
            <div>
                <Timeline mode="alternate">
                <Timeline.Item>
                <Card hoverable title="Siapabutuh.id" bordered={false} className="tim1" style={{ width: 300, margin:'0 30px', display: 'inline-block', textAlign:'left' }}>
                <div style={{ width: 170 }}>
                <p>Front-End Developer</p>
                </div>
                </Card>
                </Timeline.Item>
                <Timeline.Item color="green">
                <Card hoverable title="Computer Lab Assistance" bordered={false} className="tim1" style={{ width: 300, margin:'0 30px', display: 'inline-block', textAlign:'left' }}>
                <div style={{ width: 170 }}>
                <p>Computer Networking Assistance</p>
                </div>
                </Card>
                </Timeline.Item>
                {/* <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item> */}
                </Timeline>
            </div>
        )
    }
}

export default Experience;