import './App.css';
import Home from './routes/home';
import { Routes, Route } from "react-router-dom";
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
