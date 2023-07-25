const http = require('http'); 
const fs = require('fs'); 
 
const server = http.createServer((req,res)=>{ 
    const url = req.url; 
    const method = req.method; 
 
    if(url === '/Login'){ 
        res.write('<html>'); 
        res.write('<header><title>Login Page</title></head>'); 
        res.write('<body><form action="/ReadUser" method="POST"><input type ="text" name="UserName"><button type="submit">Login</button></form></body>'); 
        res.write('</html>'); 
        return res.end(); 
    } 
 
    if(url === '/ReadUser' && method === 'POST') 
    { 
        fs.readFile('Chat.txt', (err, data) => { 
            if (err) { 
                console.log(err); 
                data = 'no chat Exists'; 
            } 
        const body = []; 
        req.on('data', (chunk) => { 
            body.push(chunk); 
        }); 
        req.on('end', () => { 
            const parsedBody = Buffer.concat(body).toString(); 
            const Username = parsedBody.split('=')[1]; 
             
            // Append the new message to the file 
            fs.appendFileSync('Chat.txt', Username + ' '); 
 
            // Redirect to the ChatPage after saving the user 
            res.statusCode = 302; 
            res.setHeader('Location', '/ChatPage'); 
            return res.end(); 
        }); 
    }); 
    } 
 
    if(url === '/ChatPage'){ 
        res.write('<html>'); 
        res.write('<header><title>Welcome To The Chat</title></head>'); 
        res.write('<body><form action="/Chat" method="POST"><input type ="text" name="message"><button type="submit">Send</button></form></body>'); 
        res.write('</html>'); 
 
        // Read messages from the file and display them at the top of the form 
        const messages = fs.readFileSync('Chat.txt', 'utf8').split('\n'); 
        messages.forEach(Chat => { 
            if (Chat !== '') { 
                res.write(`<p>${Chat}</p>`); 
            } 
        }); 
        return res.end(); 
    } 
 
    if(url === '/Chat' && method === 'POST')  
    { 
        const body = []; 
        req.on('data', (chunk) => { 
            body.push(chunk); 
        }); 
        req.on('end', () => { 
            const parsedBody = Buffer.concat(body).toString(); 
            const message = parsedBody.split('=')[1]; 
             
            // Append the new message to the file 
            fs.appendFileSync('Chat.txt', message); 
 
            // Redirect to the ChatPage after sending the message 
            res.statusCode = 302; 
            res.setHeader('Location', '/ChatPage'); 
            return res.end(); 
        }); 
    } 
}); 
 
server.listen(3000);