// chatgpt.js


<<<<<<< HEAD, =======, >>>>>>> 1234567890abcdef
// Variables to control rate limiting
let lastRequestTime = 0;
const delayBetweenRequests = 1000; // Set the delay (in milliseconds) between API requests

// Function to send user input to the ChatGPT API and receive responses
function sendUserInput(userInput) {
  // Check if enough time has passed since the last API request
  const currentTime = Date.now();
  const timeSinceLastRequest = currentTime - lastRequestTime;
  if (timeSinceLastRequest < delayBetweenRequests) {
    // Delay the request to avoid hitting rate limits
    setTimeout(() => {
      sendUserInput(userInput);
    }, delayBetweenRequests - timeSinceLastRequest);
    return;
  }

  // Make the API request
  const apiKey = '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';
  const url = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: userInput
      }
    ]
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(response => {
    // Check if the response contains the 'x-usage' header
    const usage = response.headers.get('x-usage');
    if (usage) {
      const usageInfo = JSON.parse(usage);
      const chatOutput = document.getElementById('chat-output');
      const header = document.createElement('div');
      header.textContent = 'Welcome to ChatGPT Integration Plugin';
      header.style.fontWeight = 'bold';
      header.style.marginBottom = '10px';
      chatOutput.appendChild(header);

      const usageMessage = document.createElement('div');
      usageMessage.innerHTML = `Total tokens used: ${usageInfo.total_tokens}<br>`;
      usageMessage.innerHTML += `Remaining tokens: ${usageInfo.remaining_tokens}<br>`;
      usageMessage.innerHTML += `Estimated reset time: ${new Date(usageInfo.reset * 1000)}<br>`;
      chatOutput.appendChild(usageMessage);
    }
    return response.json();
  })
  .then(data => {
    if (data.choices && data.choices.length > 0) {
      const chatOutput = document.getElementById('chat-output');
      chatOutput.innerHTML += '<div class="chat-response">' + data.choices[0].message.content + '</div>';
    } else {
      console.error('Error: Invalid API response');
    }

    // Update the last request time after receiving the response
    lastRequestTime = Date.now();
  })
  .catch(error => {
    console.error('Error:', error);
    // Update the last request time in case of an error to prevent further immediate requests
    lastRequestTime = Date.now();
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
// chatgpt.js

// Variables to control rate limiting
let lastRequestTime = 0;
const delayBetweenRequests = 1000; // Set the delay (in milliseconds) between API requests

// Function to send user input to the ChatGPT API and receive responses
function sendUserInput(userInput) {
  // Check if enough time has passed since the last API request
  const currentTime = Date.now();
  const timeSinceLastRequest = currentTime - lastRequestTime;
  if (timeSinceLastRequest < delayBetweenRequests) {
    // Delay the request to avoid hitting rate limits
    setTimeout(() => {
      sendUserInput(userInput);
    }, delayBetweenRequests - timeSinceLastRequest);
    return;
  }

  // Make the API request
  const apiKey = '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';
  const url = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: userInput
      }
    ]
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(response => {
    // Check if the response contains the 'x-usage' header
    const usage = response.headers.get('x-usage');
    if (usage) {
      const usageInfo = JSON.parse(usage);
      const chatOutput = document.getElementById('chat-output');
      const header = document.createElement('div');
      header.textContent = 'Welcome to ChatGPT Integration Plugin';
      header.style.fontWeight = 'bold';
      header.style.marginBottom = '10px';
      chatOutput.appendChild(header);

      const usageMessage = document.createElement('div');
      usageMessage.innerHTML = `Total tokens used: ${usageInfo.total_tokens}<br>`;
      usageMessage.innerHTML += `Remaining tokens: ${usageInfo.remaining_tokens}<br>`;
      usageMessage.innerHTML += `Estimated reset time: ${new Date(usageInfo.reset * 1000)}<br>`;
      chatOutput.appendChild(usageMessage);
    }
    return response.json();
  })
  .then(data => {
    if (data.choices && data.choices.length > 0) {
      const chatOutput = document.getElementById('chat-output');
      chatOutput.innerHTML += '<div class="chat-response">' + data.choices[0].message.content + '</div>';
    } else {
      console.error('Error: Invalid API response');
    }

    // Update the last request time after receiving the response
    lastRequestTime = Date.now();
  })
  .catch(error => {
    console.error('Error:', error);
    // Update the last request time in case of an error to prevent further immediate requests
    lastRequestTime = Date.now();
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
=======
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
  
>>>>>>> bae9f0b6bb1b8c5cce536210553d8d42b66e2ed7
