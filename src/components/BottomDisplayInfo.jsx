import React from 'react'

// state 별로 분리하기
// 컴포넌트 간 간격 조정하기 (css)
export default function BottomDisplayInfo({ fpsInfo, scaleInfo }) {
  return (
    <div className='bottom-display-info'>
        <span>fps:</span>
        <span>{fpsInfo}</span>
        <span>  //  </span>
        <span>scale: </span>
        <span>{scaleInfo}</span>
    </div>
  );
}