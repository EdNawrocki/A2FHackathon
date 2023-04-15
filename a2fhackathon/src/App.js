import './App.css';
import Home from './routes/home';
import { Routes, Route } from "react-router-dom";
import socketIO from 'socket.io-client';
import ChatPage from './routes/ChatPage';
const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home socket={socket}/> } />
        <Route path="/chat" element={<ChatPage socket={socket} />}/>
      </Routes>
    </div>
  );
}

export default App;
