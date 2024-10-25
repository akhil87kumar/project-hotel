import React from 'react';
import Guest from './Guest.module.css';
import CustomArrows from './CustomArrow';

function GuestReview() {
  return (
    <div>
      <div className={Guest.main}>
        <CustomArrows/>

      </div>
    </div>
  );
}

export default GuestReview;
