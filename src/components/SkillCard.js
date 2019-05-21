import React, {Component} from 'react';
import { Card } from 'antd';
import { Progress } from 'antd';
import '../App.css';

class SkillCard extends Component{
    render(){
        return (
            <div style={{ padding: '30px' }}>
             <Card title="Professional" bordered={false} className="tim1" style={{ width: 300, margin:'0 30px', display: 'inline-block', textAlign:'left' }}>
                <div style={{ width: 170 }}>
                <Progress percent={80} size="small" status="active" />
                <p>UI/UX Design</p>
                <Progress percent={70} size="small" status="active" />
                <p>Android Development</p>
                <Progress percent={70} size="small" status="active" />
                <p>PHP Web Application</p>
                <Progress percent={80} size="small" status="active" />
                <p>React JS</p>
                </div>
             </Card>
             <Card title="Personal" bordered={false} className="tim2" style={{ width: 300, margin:'0 30px',display: 'inline-block', textAlign:'left'}}>
               <div style={{ width: 170 }}>
               <Progress percent={70} size="small" status="active" />
               <p>Leadership</p>
               <Progress percent={80} size="small" status="active" />
               <p>Analytical Skill</p>
               <Progress percent={70} size="small" status="active" />
               <p>Communicative</p>
               <Progress percent={70} size="small" status="active" />
               <p>Time Management</p>
               </div>
            </Card>
            <Card title="Language" bordered={false} className="tim3" style={{ width: 300, margin:'0 30px',display: 'inline-block', textAlign:'left'}}>
              <div style={{ width: 170 }}>
              <Progress percent={90} size="small" status="active" />
              <p>Indonesia</p>
              <Progress percent={70} size="small" status="active" />
              <p>English</p>
              <Progress percent={50} size="small" status="active" />
              <p>Japanase</p>   
              <Progress percent={20} size="small" status="active" />
              <p>Arabic</p>  
              </div>
           </Card>
            </div>
        )
    }
}

export default SkillCard;