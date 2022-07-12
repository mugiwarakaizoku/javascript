//window collapse
document.querySelector('.collapsable').addEventListener("click",()=>{
    document.querySelector('#collapse-div').classList.toggle("visible-collapse")
})


//time-stamp
function getTimeStamp(){
    let time = new Date()
    let hrs = time.getHours();
    let mins = time.getMinutes();
    if(hrs<10){
        hrs = "0"+hrs
    }
    if(mins<10){
        mins = "0"+mins
    }
    time = hrs+":"+mins
    return time
}

//bot welcome message
function getBotMsg(){
    let msg = document.querySelector('#bot-first-message')
    msg.innerHTML = "Hi! How may I help you?"
    document.querySelector('#timestamp').innerHTML = getTimeStamp()
}

getBotMsg()

//send user message
function sendUserMsg(userText){
    // userText = document.querySelector('.user-msg').value
    let newP = document.createElement('p')
    newP.classList.add('user-sent-message')
    console.log(newP)
    newP.innerHTML = '<span>'+userText+'</span>'
    document.querySelector('#user-messages').appendChild(newP)
    document.querySelector('.user-msg').value = ""
    document.querySelector('.chat-messages').scrollTop = 
    document.querySelector('.chat-messages').scrollHeight
}

function getBotResponse(userText){
    let response = getBotAnswer(userText)
    let botP = document.createElement('p')
    botP.setAttribute('id','bot-msgs')
    botP.innerHTML = '<span>'+response+'</span>'
    document.querySelector('#user-messages').appendChild(botP)
    document.querySelector('.chat-messages').scrollTop = 
    document.querySelector('.chat-messages').scrollHeight
}

function getResponse(userText){
    sendUserMsg(userText)
    setTimeout(()=>{getBotResponse(userText)},500)
}

function sendButton(){
    text = document.querySelector('.user-msg').value
    console.log(text)
    if(text!=""){getResponse(text)}
}

function heartButton(){
    sendUserMsg('<i id="chat-icon" style="color:red" class="fa fa-fw fa-heart"></i>')
}

//Press Enter to send message
document.querySelector('.user-msg').addEventListener('keypress',(e)=>{
    if(e.code == "Enter"){
        text = document.querySelector('.user-msg').value
        if(text!=""){
            getResponse(text)
        }
    }
})

//custom bot messages

const trigger = [
    ["hi", "hey", "hello"],
    ["how are you", "how are things"],
    ["what is going on", "what is up"],
    ["happy", "good", "well", "fantastic", "cool"],
    ["bad", "bored", "tired", "sad"],
    ["tell me story", "tell me joke"],
    ["thanks", "thank you"],
    ["bye", "good bye", "goodbye"]
];
    
const reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"], 
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "Nothing much",
        "Exciting things!"
    ],
    ["Glad to hear it"],
    ["Why?", "Cheer up buddy"],
    ["What about?", "Once upon a time..."],
    ["You're welcome", "No problem"],
    ["Goodbye", "See you later"],
];

function getBotAnswer(userInput) {
    //rock paper scissors
    if (userInput == "rock") {
        return "paper";
    } else if (userInput == "paper") {
        return "scissors";
    } else if (userInput == "scissors") {
        return "rock";
    }
    //custom responses
    let item;
    for(let x=0;x<trigger.length;x++){
        for(let y=0;y<reply.length;y++){
            if(trigger[x][y]==userInput){
                items = reply[x]
                item = items[Math.floor(Math.random() * items.length)]
            }
        }
    }
    if(item) {
        return item;
    }
    else{
        return "Try asking something else!"
    }
}

