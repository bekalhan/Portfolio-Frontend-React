import React from 'react';
import boy from '../../img/boy.png';
import vektor from '../../img/Vector1.png';
import vektro2 from '../../img/Vector2.png';
import './IntroduceRight.css';

function IntroduceRight() {
  return (
    <div className='IntroduceRight'>
        <div className='images'>
            <img src={vektor}></img>
            <img src={vektro2}></img>
            <img src={boy}></img>
        </div>
    </div>
  )
}

export default IntroduceRight