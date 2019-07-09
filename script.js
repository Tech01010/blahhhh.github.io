nlp = window.nlp_compromise;

var messages = [], 
  lastUserMessage = "",
  botMessage = "",
  botName = 'Adkubot',
  talking = true;

function chatbotResponse() {
  talking = true;
  botMessage = "ERROR ERROR ERROR ERROR";

  if(lastUserMessage.toLowerCase().includes("hi") || lastUserMessage.toLowerCase().includes("hey") || lastUserMessage.toLowerCase().includes("hello")) {
    botMessage = "Hello human being need help?";
  }

  if(lastUserMessage.toLowerCase().includes("I need help with where the project is stored")) {
    botMessage = "On Scratch and Python!";
      if(lastUserMessage.toLowerCase().includes("how are you")) {
    botMessage = botMessage.concat(" I am good thank you for asking.");
    }
  }
  if(lastUserMessage.toLowerCase().includes("whats your name")) {
    botMessage = "My name is AdkuBot"
  }
  if(lastUserMessage.toLowerCase().includes("I hate you")) {
    botMessage = "Im sorry to hear that :(";
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
