const socket = new WebSocket('ws://localhost:9000/ws/chat');

socket.onopen = (event) => {
    console.log('WebSocket connection opened');
};

socket.onclose = (event) => {
    if (event.wasClean) {
        console.log(`WebSocket connection closed, code=${event.code}, reason=${event.reason}`);
    } else {
        console.error('Connection died');
    }
};

socket.onerror = (error) => {
    console.error('WebSocket error', error);
};

export default socket;