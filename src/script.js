nlp = window.nlp_compromise;

var messages = [], 
  lastUserMessage = "",
  botMessage = "",
  botName = 'Chatbot',
  talking = true;

function chatbotResponse() {
  talking = true;
  botMessage = "I don't Understand";

  if(lastUserMessage.toLowerCase().includes("hi") || lastUserMessage.toLowerCase().includes("hey") || lastUserMessage.toLowerCase().includes("hello")) {
    botMessage = "Hey there! how's it going?";
  }

  if(lastUserMessage.toLowerCase().includes("good")) {
    botMessage = "Thats good!";
      if(lastUserMessage.toLowerCase().includes("you")) {
    botMessage = botMessage.concat(" I am good thank you for asking.");
    }
  }
  if(lastUserMessage.toLowerCase().includes("name")) {
    botMessage = "My name is Chatbot"
  }
  if(lastUserMessage.toLowerCase().includes("no")) {
    botMessage = "Why so negative";
  }
  if(lastUserMessage.toLowerCase().includes("gender") || lastUserMessage.toLowerCase().includes("male") || lastUserMessage.toLowerCase().includes("female")) {
    botMessage = "I am an artificial intelligance I have no gender.";
  }
}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    chatbotResponse();
    messages.push("<b>" + botName + ":</b> " + botMessage);
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}
document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}