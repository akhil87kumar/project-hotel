import React from 'react';
import SimpleSlider from './SimpleSlider';

function AboutSilderData() {
    let img1="https://lirp.cdn-website.com/e2ccc0c7/dms3rep/multi/opt/DSC_1244-1920w.JPG";
    let img2="https://images.trvl-media.com/lodging/96000000/95250000/95245800/95245706/f41da0fb.jpg?impolicy=resizecrop&rw=1200&ra=fit";
    let img3="https://lirp.cdn-website.com/e2ccc0c7/dms3rep/multi/opt/450316932-1920w.jpg";

    let imgData={img1, img2,img3}
  return (
    <>
      <SimpleSlider data= {imgData}/>
      

    </>
  );
}

export default AboutSilderData;
