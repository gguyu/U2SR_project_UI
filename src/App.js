import React, { useState, Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import TODConnect from './components/TODConnect';

// 설정법
// node.js 설치, npm 설치, yarn 설치
// ((npm create-react-app --use-npm) ==> App.js, components 폴더만 copy)
// or 모두 copy

// 메인 화면
const App = () => {

  /*  서버에서 받아온 데이터:
      상단바: TOD 연결 상태, AI Version 리스트, 경고기능 작동상태
      중단: (이미지 바이너리), (상황목록)
      하단바: 화면 정보 (fps, 해상도), 객체 검출 정보 (객체이름, 수량), 상황 (정상, 이상, 경고)
  */

  // 각 구성요소 상태 관리 (새로고침 없이 자동 re-rendering을 위해 state로 저장)
  // tod연결상태:  // -1: 연결 없음, 0: 연결 중... (로딩), 1: 연결 완료
  const [todConnection, setTodConnection] = useState(-1);
  const [AIVersion, setAIVersion] = useState("Select AI ver.");
  const [warningState, setWarningState] = useState(0);
  const [warningWaitTime, setWarningWaitTime] = useState(3);
  const [warningOnTime, setWarningOnTime] = useState(3);

  // 시간 설정은 input box에 입력하고 옆에 button 눌러서 전송하기 ('입력')
  // AI Version도 drop down에서 선택하고 옆에 button 눌러서 전송하기 ('설정')
  // 또는 AI Version을 선택하고 TOD 연결 상태 옆에 연결 // 재연결 버튼 누르면서 전송
  // 서버에서 받은 데이터 ---> 상태로 관리 (커스텀 훅 활용)

  // 경고발생 대기시간도 state 관리해서 입력할 수 있게 하기
  // 상황 목록 구현하기 (스크롤바)
  // 하단부 구현하기

  return (
    <div className="App">

      <div className="top-area">
        <div className="top-element">TOD 연결 상태</div>
        <TODConnect todConnection={ todConnection } setTodConnection={ setTodConnection } AIVersion={ AIVersion }/>

        <div className="top-element">AI Version</div>
        <Dropdown AIVersion={ AIVersion } setAIVersion={ setAIVersion }/>

        <div className="top-element">경고기능 작동 중</div>

        <div className="top-element">경고발생 대기시간 (초)</div>
        <input className="input-box" value={ warningWaitTime }></input>
        <button className="input-btn">설정</button>

        <div className="top-element">경고기능 켜짐시간 (초)</div>
        <input className="input-box" value={ warningOnTime }></input>
        <button className="input-btn">설정</button>
      </div>

      <div className="mid-area">
        <div className="mid-video">left: 비디오 재생</div>
        <div className="mid-log">right: 상황 목록 출력</div>
      </div>

      <div className="bottom-area">
        <div className="bottom-display">left: 화면 정보</div>
        <div className="bottom-object">mid: 검출 객체</div>
        <div className="bottom-state">right: 상황 정보</div>
      </div>

    </div>
  );
}

export default App;
