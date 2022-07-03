import React from 'react';
import './IntroduceLeft.css';
import Icons from '../Icons/Icons';

function Introduce() {
  return (
    <div className='IntroduceLeft'>
      <div className='I-text'>
          <h1>Hy! I am <br></br> <span>Berat Kalhan</span></h1>
          <button className='I-button'>Hire me</button>
      </div>
      <Icons />
    </div>
  )
}

export default Introduce