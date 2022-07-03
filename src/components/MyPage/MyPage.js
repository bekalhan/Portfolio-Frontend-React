import React from 'react';
import Navbar from '../Navbar/Navbar';
import Introduce from '../Introduce/Introduce';
import './MyPage.css';

function MyPage() {
  return (
    <div className='MyPage'>
        <Navbar />
        <Introduce />
    </div>
  )
}

export default MyPage