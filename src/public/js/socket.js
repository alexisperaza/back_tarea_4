const socket = io()

const messageInput = document.getElementById('messageInput');
const sendMessagesButton = document.getElementById('sendMessagesButton');
const messagesContainer = document.getElementById('messagesContainer');

sendMessagesButton.addEventListener('click', ()=> {
    const inputText = messageInput.value;
    socket.emit('message', inputText);
    messageInput.value = '';
})

// messageInput.addEventListener('input', event => {
//     const inputText = event.target.value;
//     socket.emit('message', inputText)
// })

// socket.on('message', (mensajes) => {
//     broadcastMessage.innerHTML = mensajes;
// })


socket.on('messages', (mensajes) => {
    const mensajesHTML = mensajes.map(mensaje =>{
        return `<p>${mensaje.socketId}: ${mensaje.mensaje}</p>`
    }).join('');

    messagesContainer.innerHTML = mensajesHTML
})

// socket.emit('message', 'hola me estoy comunicando desde un webSocket');

socket.on('evento_para_socket_individual', data => console.log(data))

socket.on('evento_para_todos_menos_el_socket_actual', data => console.log(data))