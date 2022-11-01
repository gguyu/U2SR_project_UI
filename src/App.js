import React, { useState, Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import TODConnect from './components/TODConnect';
import Button from './components/Button';
import BottomState from './components/BottomState';
import BottomDisplayInfo from './components/BottomDisplayInfo';
import BottomObject from './components/BottomObject';

// 설정법
// node.js 설치, npm 설치, yarn 설치
// ((npm create-react-app --use-npm) ==> git 에서 App.js, App.css, components 폴더만 copy)
// or 모두 copy (project-ui 폴더)

// 메인 화면
const App = () => {

  /*  서버에서 받아올 데이터:
      상단바: TOD 연결 상태, AI Version 리스트, 경고기능 작동상태
      중단: (이미지 바이너리), (상황목록)
      하단바: 화면 정보 (fps, 해상도), 객체 검출 정보 (객체이름, 수량), 상황 (정상, 이상, 경고)
  */

  // 각 구성요소 상태 관리 (새로고침 없이 자동 re-rendering을 위해 state로 저장)
  // tod연결상태: { -1: 연결 없음, 0: 연결 중... (로딩), 1: 연결 완료 }
  // AIVersion: {선택한 AI Version}  //  AI Version List도 따로 관리하기
  const [todConnection, setTodConnection] = useState(-1);
  const [AIVersion, setAIVersion] = useState("Select AI ver.");
  const [warningOn, setWarningOn] = useState(0);
  const [warningWaitTime, setWarningWaitTime] = useState(3);
  const [warningOnTime, setWarningOnTime] = useState(3);

  const [fpsInfo, setFpsInfo] = useState(0);
  const [scaleInfo, setScaleInfo] = useState("none");
  const [objectHuman, setObjectHuman] = useState(0);
  const [objectAnimal, setObjectAnimal] = useState(0);
  const [objectVehicle, setObjectVehicle] = useState(0);
  const [warningState, setWarningState] = useState(0);
  // 경고발생 대기시간도 state 관리해서 입력할 수 있게 하기 (TODConnect 참고)
  // 상황 목록 구현하기 (스크롤바)
  // 하단부 구현하기
  
  /* TODO
    >> css 사이즈 % 단위로 바꾸고, position: {relative, absolute} 활용하기

    >> data fetch 메소드들 구현하고 서버와 연동하여 테스트 진행
    >> 서버에서 받은 데이터 ---> 상태로 관리 (custom hook 활용)
    >> AI Version List도 서버에서 받아서 상태로 따로 관리하기

    >> 서버에 데이터 전송할 때는 항상 button을 눌렀을 때 전송하기
    >> 경고 시간 설정할 때 react-hook-form 사용해서 validation 체크하기

    >> 컴포넌트들 extraction(추출) 해서 모듈화 하기
    >> 상황 목록 로그 구현하기 (채팅 앱 구현하는 것처럼 (예전 프로젝트 한 것 참고))
    >> video 재생 (바이너리 이미지 스트리밍) 구현하기 
    
    >> 버튼 눌렀을 때 alarm 보다 좀 더 보기 좋은 것으로 바꾸기 */

  return (
    <div className="App">

      <div className="top-area">
        <div className="top-element">TOD 연결 상태</div>
        <TODConnect todConnection={ todConnection } setTodConnection={ setTodConnection } AIVersion={ AIVersion }/>

        <div className="top-element">AI Version</div>
        <Dropdown AIVersion={ AIVersion } setAIVersion={ setAIVersion }/>

        <div className="top-element">[ 경고기능 미작동 ]</div>

        <div className="top-element">경고발생 대기시간 (초)</div>
        <input className="input-box" value={ warningWaitTime }></input>
        <Button style={{width:"60px"}}>설정</Button>

        <div className="top-element">경고기능 켜짐시간 (초)</div>
        <input className="input-box" value={ warningOnTime }></input>
        <Button style={{width:"60px"}}>설정</Button>
      </div>


      <div className="mid-area">
        <div className="mid-video">left: 비디오 재생 (미구현)</div>
        <div className="mid-log">right: 상황 목록 출력 (미구현)</div>
      </div>


      <div className="bottom-area">
        <BottomDisplayInfo fpsInfo={fpsInfo} scaleInfo={scaleInfo}></BottomDisplayInfo>
        <BottomObject objectHuman={objectHuman} objectAnimal={objectAnimal} objectVehicle={objectVehicle}></BottomObject>
        <BottomState warningState={ warningState } />
      </div>

    </div>
  );
}

export default App;
