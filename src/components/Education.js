import React, {Component} from 'react';
import { Timeline, Icon } from 'antd';
import { Card } from 'antd';

class Education extends Component{
    render(){
        return(
            <div>
                <Timeline mode="alternate">
                <Timeline.Item>
                <Card hoverable title="Junior High School Arut Selatan (2011 - 2014)" bordered={true} className="tim1" style={{ width: 500, margin:'0 30px', display: 'inline-block', textAlign:'left' }}>
                <div style={{ width: 400 }}>
                <Icon type="book" theme="filled" />
                    <span> | - </span>
                    <br></br>
                <Icon type="home" theme="filled" />
                    <span> | Pangkalan Bun, Kalimantan Tengah </span>
                    <br></br>
                <Icon type="chrome" theme="filled" />
                    <span> | - </span>
                </div>
                </Card>
                </Timeline.Item>
                <Timeline.Item color="green">
                <Card hoverable title="Senior High School Pangkalan Bun (2014 - 2017)" bordered={true} className="tim1" style={{ width: 500, margin:'0 30px', display: 'inline-block', textAlign:'left' }}>
                <div style={{ width: 400 }}>
                <Icon type="book" theme="filled" />
                    <span> | IPA </span>
                    <br></br>
                <Icon type="home" theme="filled" />
                    <span> | Pangkalan Bun, Kalimantan Tengah </span>
                    <br></br>
                <Icon type="chrome" theme="filled" />
                    <span> | sman1pangkalanbun.sch.id </span>
                </div>
                </Card>
                </Timeline.Item>
                <Timeline.Item color="red">
                <Card hoverable title="Universitas Gadjah Mada (2017 - Now)" bordered={true} className="tim1" style={{ width: 500, margin:'0 30px', display: 'inline-block', textAlign:'left' }}>
                <div style={{ width: 400 }}>
                <Icon type="book" theme="filled" />
                    <span> | D3 Komputer dan Sistem Informasi </span>
                    <br></br>
                <Icon type="home" theme="filled" />
                    <span> | Depok, Sleman, Yogyakarta </span>
                    <br></br>
                <Icon type="chrome" theme="filled" />
                    <span> | ugm.ac.id </span>
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

export default Education;