import './App.css';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <h1 className="logo">Theatrical</h1>
      <div className="player-container">
        {/* takes in URL attribute */}
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
