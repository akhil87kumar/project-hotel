import React from 'react';
import SimpleSlider from './SimpleSlider';

function CenterDivSliderData() {
    let img1 = "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let img2 = "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let img3 = "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    let imgData = {img1 , img2 , img3}
  return (
    <>
      <SimpleSlider data = {imgData}/>
    </>
  );
}

export default CenterDivSliderData;
