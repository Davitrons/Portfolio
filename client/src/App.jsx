import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMensaje(data.message));
  }, []);

  return (
    <div>
      <h1>Mi Portfolio</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
