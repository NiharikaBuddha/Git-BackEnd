const http = require('http');

const server = http.createServer((req, res) => {
  
  // Log your name to the console
  const myName = 'Niha'; // Replace 'Your Name' with your actual name
  console.log('My name is:', myName);
  
  // Send your name in the response to the browser
  res.end(myName);
});

server.listen(4000);