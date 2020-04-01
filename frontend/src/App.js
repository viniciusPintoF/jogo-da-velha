import React from 'react';
// import contactServer from './api'
import io from 'socket.io-client'

function App() {
  
  let socket = io('ws://localhost:3333')
  socket.on('connect', () => console.log('Conectou ao server'))
  

  function sendHello(){
    console.log('Tenta enviar hello')
    socket.emit('chat.message', {number: 10})
  }

  return (
    <div className="App">
      <h1>TopZera</h1>
      <button type="button" onClick={sendHello}>Envia</button>
    </div>
  );
}

export default App;
