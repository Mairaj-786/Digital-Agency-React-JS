import React from 'react'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Facts from './Components/StateFacts/Facts'
import Team from './Components/Team/Team'
import './main.css'
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Facts />
      <Team />
    </div>
  );
}

export default App;
