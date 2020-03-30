const app = require('express')()
const http = require('http').createServer(app)
const socketIo = require('socket.io')(http)

app.get('/grid', function(req,res){{
    res.sendFile(__dirname + '/test.html');
}})

socketIo.on('connection', function(socket){
    console.log('A user connected')
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
})

http.listen(3000, function(){
    console.log('listening on *:3000')
})



