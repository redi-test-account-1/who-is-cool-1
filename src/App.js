import { useEffect, useState } from 'react';
import './App.css';

const COOL_NAMES = [
  'james'
]

function App() {
  const [name, setName] = useState('')
  const [isCool, setIsCool] = useState(false)

  useEffect(()=>{
    setIsCool(COOL_NAMES.includes(name.toLocaleLowerCase()))
  },[name])

  const handleChange = (e) =>{
    setName(e.target.value)
  }  
  
  return (
    <div className="App">
      <h1>Who is Cool?</h1>
      <input value={name} onChange={handleChange}/>
      {name && <p>{name} is {!isCool && 'not'} cool</p>}
    </div>
  );
}

export default App;
