const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
		// cors 설정
    cors: {
        credentials: true,
    },
    allowEIO3: true,
    pingTimeout: 1000,
});

//connection event handler
io.on('connection' , function(socket) {
    socket.on('chat', function(data){
        const msg = {
            owner: data.owner,
            subtitle: data.subtitle,
            content: data.content,
        }
        socket.broadcast.emit('chat', msg);
    });
})

server.listen(3010, function() {
    console.log('socket io server listening on port')
})