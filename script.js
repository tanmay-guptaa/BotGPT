const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const API_KEY = "YOUR_API_KEY";

const createChatLi = (message, className) => {
  //create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message; //to show content only in text while giving input
  return chatLi;
}

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = incomingChatLi.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
  body: JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [{role: "user", content: userMessage}]
  })
  }
  //send post request to API key and get response
   fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
     messageElement.textContent = data.choices[0].message.content;
   }).catch((error) => {
      messageElement.classList.add("error");
      messageElement.textContent = "Something went wrong. Please try again!";
   }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if(!userMessage) return;
  chatInput.value = "";

  //append user's message to chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    //display message waiting for response
    const incomingChatLi = createChatLi(".....", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
     generateResponse(incomingChatLi);
  }, 600);
}

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default behavior of the "Enter" key (e.g., line break in textarea)
    console.log(event);
    handleChat();
  }
});
  
sendChatBtn.addEventListener("click", handleChat);

chatbotToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot");
});

chatbotCloseBtn.addEventListener("click" , () => {
  document.body.classList.remove("show-chatbot");
});