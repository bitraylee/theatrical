import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/VideoPlayer";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";
import RoomPage from "./components/RoomPage";
import "./font_import.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Switch>
          <Route path="/" component={SearchPage} exact />
          <Route path="/room" component={RoomPage} />
        </Switch>
      {/* <h1 className="logo">Theatrical</h1> */}
      {/* <RoomPage url="https://drive.google.com/u/0/uc?id=1wuAUcidfF59Rfo0HihJ0cAovtxCrWmg9&export=download"></RoomPage> */}
      {/* <div className="player-container"> */}
      {/* takes in URL attribute */}
      {/* <VideoPlayer url="https://drive.google.com/u/0/uc?id=1wuAUcidfF59Rfo0HihJ0cAovtxCrWmg9&export=download"/> */}
      {/* <VideoPlayer url="https://storage.googleapis.com/13463b760c7fa343c4c9/f4793/5bb2f617e5e03487d519bd34d9c12941.mp4"/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
