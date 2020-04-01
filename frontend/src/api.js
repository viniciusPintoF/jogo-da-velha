const socket = require('socket.io-client')('http://localhost:3333');


function contactServer(){
    console.log('Entrou')
    socket.on('hello-from-server', () => console.log('Server respondeu o oi'))
    socket.emit('hello-from-client')    
}

export default contactServer