const socket = io()
import { productManager } from "../../controllers/ProductManager.js"

const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const codeInput = document.getElementById('codeInput');
const priceInput = document.getElementById('priceInput');
const stockInput = document.getElementById('stockInput');
const categoryInput = document.getElementById('categoryInput');
const thumbnailsInput = document.getElementById('thumbnailsInput');

const addProductButton = document.getElementById('addProductButton');
const messagesContainer = document.getElementById('messagesContainer');

addProductButton.addEventListener('click', ()=> {
    socket.emit("addProduct", {
        title: titleInput,
        description: descriptionInput,
        code: codeInput,
        price: priceInput,
        stock: stockInput,
        category: categoryInput,
        thumbnails: thumbnailsInput
      });
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