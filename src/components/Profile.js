import React from 'react';
import SkillCard from './SkillCard.js';
import Experience from './Experience';
import Education from './Education.js';
import ProfileCard from './ProfileCard.js';

function Profile() {
  return (
    <div style={{textAlign: "center"}}>
    <div className="snowflakes" aria-hidden="true">
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>
  </div>
      <h1 style={{color:"#fff", textAlign: "center"}}>About Me</h1>
      <ProfileCard/>
      <br></br>
      <h1 style={{color:"#fff", textAlign: "center"}}>Education</h1>
      <br></br>
      <Education/>
      <h1 style={{color:"#fff", textAlign: "center"}}>Experience</h1>
      <br></br>
      <Experience/>
      <h1 style={{color:"#fff", textAlign: "center"}}>Skill</h1>
      <br></br>
      <SkillCard/>
</div>
  )
}

export default Profile;