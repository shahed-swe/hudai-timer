import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [hour, setHour] = useState()
  const [minute, setMinute] = useState()
  const [second, setSecond] = useState()
  const [timer, setTimer] = useState()



  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().getSeconds() - 60)
      setSecond(new Date().getSeconds())
      setMinute(new Date().getMinutes())
      setHour(new Date().getHours())
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ margin: "0" }}>Time <span style={{ textDecoration: "underline" }}>{hour}:{minute}:{second}</span></p>
        Time Running Out ({timer * -1})
      </header>
    </div>
  );
}

export default App;
