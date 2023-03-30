//Creating reference for DOM 
const balajiSelectorBtn = document.querySelector('#balaji-selector')
const kumarSelectorBtn = document.querySelector('#kumar-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const createChatMessageElement = (message) => `
<div class="message ${message.sender === 'Balaji' ? 'blue-bg' : 'dblue-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>    
</div>
`
let messageSender = 'Balaji'
const updateMessageSender = (name) => {
    messageSender = name
    chatInput.placeholder = `Type here, ${messageSender}...`

    if(name === 'Balaji') {
        balajiSelectorBtn.classList.add('active-person')
        kumarSelectorBtn.classList.remove('active-person')
        chatHeader.innerText = `Send message to Kumar...`
    }

    if(name === 'Kumar') {
        kumarSelectorBtn.classList.add('active-person')
        balajiSelectorBtn.classList.remove('active-person')
        chatHeader.innerText = `Send message to Balaji...`
    }

    chatInput.focus()
}

balajiSelectorBtn.onclick = () => updateMessageSender('Balaji')
kumarSelectorBtn.onclick = () => updateMessageSender('Kumar')


const sendMessage = (e) => {
    e.preventDefault()

    if(document.querySelector('.chat-input').value == ''){
        alert("Enter message to send")
        return
    }

    if(document.querySelector('.chat-input').value.length > 140){
        alert("Message cannot be more than 140 characters")
        return
    }

    if(/[^a-zA-Z0-9. ]/.test(chatInput.value)){
        alert("Message can only contain alphanumeric characters")
        return
    }

    const timestamp = new Date().toLocaleString('en-IN',{hour:'numeric', minute:'numeric',hour12:true})
    
    const message = {
        sender:messageSender,
        text: chatInput.value,
        timestamp
    }

    
    chatMessages.innerHTML += createChatMessageElement(message)

    chatInputForm.reset()

    chatMessages.scrollTop = chatMessages.scrollHeight

}

chatInputForm.addEventListener('submit', sendMessage)

clearChatBtn.addEventListener('click', () =>{
    chatMessages.innerHTML=''
    
})