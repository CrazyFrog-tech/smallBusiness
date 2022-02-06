import './App.css';
import logo from './images/background.jpg'
import * as React from 'react';
import randomColor from "randomcolor";



function App() {
  return (
    <div >
      <img className='resize' src={logo} alt="Logo" />,
      <div class="container">

        <div class="child">
        </div>
        <div class="child">
          <div>Hello</div>
          <div style={{
       backgroundColor: randomColor()
      }} >

          </div>
        </div>
        <div class="child">

        </div>
        <div class="child">

        </div>
        <div class="child">
        </div>

      </div>
    </div>
  );
}

export default App;
