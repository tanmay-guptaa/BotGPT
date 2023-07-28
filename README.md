# BotGPT
The Chatbot named BotGPT is a web application project that shows a chatbot using OpenAI's GPT-3.5-turbo model. Users can interact with the chatbot by entering prompts in the chat input box. The chatbot will respond with generated messages based on the user's input.

**Table of Contents**
1. Description
2. Installation
3. Usage
4. Features
5. Limitations
6. Contributing



**Description**

The Chatbot project uses OpenAI's GPT-3.5-turbo model to create a chatbot that can have text-based conversations with users. The chatbot UI consists of a chatbox where user messages and chatbot responses are displayed. Users can enter their prompts in the chat input text area and submit them either by pressing "Enter" or clicking the send button. The chatbot will then generate responses based on the user's input and display them in the chatbox.

![Untitledg](https://github.com/tanmay-guptaa/BotGPT/assets/119430497/f1c4a809-37b2-456b-b8a1-5091b388b867)



**Installation**

To run the Chatbot project locally, follow these steps:

1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>

   ```

2. Open the project directory.
   ```bash
   cd chatbot

   ```

3. Open the index.html file in your preferred web browser.

**Usage**

1. Open the Chatbot application in your web browser.
2. Click on the chatbot toggler button at the bottom right corner to open the chatbot UI.
3. The chatbot UI will appear with the chatbox, chat input, and send button.
4. Enter your prompt or message in the chat input text area.
5. Press "Enter" or click the send button to submit your message.
6. The chatbot will generate a response based on your input and display it in the chatbox.
7. Continue the conversation by entering more prompts in the chat input.
8. To close the chatbot UI, click the close button (X) in the chatbot header or click the chatbot toggler button again.



**Features**

The chatbot interface consists of a chatbox where messages are displayed, an input textarea for the user to type their message, and a send button to submit the message.

1. When you type a message in the input textarea and press Enter or click the send button, your message will be displayed in the chatbox 
   as an outgoing message.
2. The chatbot will then display a "..." message, indicating that it is processing your input and generating a response using the OpenAI 
   GPT-3.5 Turbo model.
3. After a short delay, the chatbot will respond with an appropriate message based on the input you provided.


**Limitations**

Since this is a simple demonstration project, the chatbot's responses are based solely on the input provided and the capabilities of the GPT-3.5 Turbo model. It may not handle complex queries or understand context as well as more advanced natural language processing models.


**Contributing**

Contributions to the Chatbot project are welcome and encouraged! If you have any improvements or new features to add, feel free to fork the repository and submit a pull request.

**NOTE:** Please note that this project requires an API key from OpenAI to work correctly. Make sure to obtain an API key and replace the 
   value of the API_KEY variable in the "script.js" file before running the project. If you don't use the API Key it will give you this 
   reply "Something went wrong. Please try again!" and a 404 error at the console.

View Demo:
https://chattbotgpt.netlify.app/
