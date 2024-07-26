//import logo from './logo.svg';
import './App.css';
import React from 'react'; //Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
//import { BrowserRouter, Route, Switch } from 'react-router-dom'; 古いバージョン
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rag from './Rag'; //作成したpage1.jsを読み込んでいる
import Manual from './Manual'; 
import Html from './Html';
import RagDataregister from './RagDataregister';
import RagChat from './RagChat';


class App extends React.Component {
  render(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Rag />} /> {/* URLのパスが'/'のみの時にPage1を表示する */}
          <Route exact path="/Manual" element={<Manual />} /> {/* 追加　URLで/page2を指定するとPage2を表示する */}
          <Route exact path="/Html" element={<Html />} />
          <Route exact path="/RagDataregister" element={<RagDataregister />} />
          <Route exact path="/RagChat" element={<RagChat  />} />
        </Routes>
      </Router>
    );
  };
}

export default App;
