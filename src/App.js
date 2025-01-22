import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  let [d,set_d] = useState('');

  let f = async ()=>{

    let rg = await fetch('http://localhost:8000/',
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          
      }
  );
  let rgyu = await rg.json();
  set_d(rgyu.message);



  }
  return (
    <div className="App">
      <button onClick={f}>click</button>

      <p>{d}</p>

    </div>
  );
}

export default App;
