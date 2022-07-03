import React from 'react';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import './Icons.css';

function Icons() {
  return (
    <div className='Icons'>
        <img className="I-icon" src={github}></img>
        <img className="I-icon" src={linkedin}></img>
        <img className="I-icon" src={instagram}></img>
    </div>
  )
}

export default Icons