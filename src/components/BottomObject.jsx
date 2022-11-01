import React from 'react'

// state 별로 분리하기
// 컴포넌트 간 간격 조정하기 (css)
export default function BottomObject({ objectHuman, objectAnimal, objectVehicle }) {
  return (
    <div className='bottom-object'>
        <span>Human:</span>
        <span>{ objectHuman }</span>
        <span>  //  </span>
        <span>Animal: </span>
        <span>{ objectAnimal }</span>
        <span>  //  </span>
        <span>Vehicle: </span>
        <span>{ objectVehicle }</span>
    </div>
  );
}