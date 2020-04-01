const app = require('express')()
const server = require('http').createServer(app)
const socketIo = require('socket.io')(server)

// app.get('/grid', function(req,res){{
//     res.sendFile(__dirname + '/test.html');
// }})

socketIo.on('connection', function(socket){
    console.log('A user connected')    
    
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat.message', function(data){
        console.log('Cliente dando oi = '+ data.number)
        socket.emit('hello-from-server')
    })
})



server.listen(3333, 'localhost', function(){
    console.log('listening on *:3333')
})



