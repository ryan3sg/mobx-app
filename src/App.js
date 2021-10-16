import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import { useState } from 'react'

const App = observer(({ timer }) => {
  const [name, setname] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
        </div>
        <div>
          <input type="text" value={name} placeholder="Your name" onChange={(e) => setname(e.target.value)} />
          <button onClick={() => timer.changeName(name)}>Apply</button>
          <button onClick={() => {
            setname("")
            timer.changeName("")
          }}>Reset</button>
        </div>
        {timer.name && (
          <div>
            Hi {timer.name}!
          </div>
        )}
      </header>
    </div>
  );
});

export default App;
