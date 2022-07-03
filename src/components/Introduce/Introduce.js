import React from 'react';
import IntroduceLeft from '../IntroduceLeft/IntroduceLeft';
import IntroduceRight from '../IntroduceRight/IntroduceRight';
import './Introduce.css';

function Introduce() {
  return (
    <div className='Introduce'>
        <IntroduceLeft />
        <IntroduceRight />
    </div>
  )
}

export default Introduce