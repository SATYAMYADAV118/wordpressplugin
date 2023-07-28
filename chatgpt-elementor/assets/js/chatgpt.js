// chatgpt.js

// Function to send user input to the ChatGPT API and receive responses
function sendUserInput(userInput) {
    // Make an API call to the ChatGPT endpoint using the userInput
    // Replace 'YOUR_API_KEY' with your actual ChatGPT API key
    const apiKey = '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';
    const url = 'https://api.openai.com/v1/chat/completions';
    
    // Define the headers for the API call
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };
  
    // Define the data to be sent in the API call
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: userInput
        }
      ]
    };
  
    // Make the API call using the fetch API
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // Process the response from the ChatGPT API
      const chatOutput = document.getElementById('chat-output');
      chatOutput.innerHTML += '<div class="chat-response">' + data.choices[0].message.content + '</div>';
    })
    .catch(error => {
      // Handle any errors that occur during the API call
      console.error('Error:', error);
    });
  }
  
  // Function to handle user input form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
      // Display user input in the chat output container
      const chatOutput = document.getElementById('chat-output');
      chatOutput.innerHTML += '<div class="chat-user">' + userInput + '</div>';
  
      // Send user input to the ChatGPT API
      sendUserInput(userInput);
  
      // Clear the user input field after submission
      document.getElementById('user-input').value = '';
    }
  }
  
  // Add event listener to the chat form submit button
  const chatForm = document.getElementById('chat-form');
  chatForm.addEventListener('submit', handleFormSubmit);
  