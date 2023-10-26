import React from 'react';
import "./NotFound.scss";

const NotFound = () => { //สิ่งที่ค้นหาแล้วไม่เจอ
  return (
    <div className='not-found my-5'>
      <div className='container flex align-center justify-center'>
        No any food found.
      </div>
    </div>
  )
}

export default NotFound