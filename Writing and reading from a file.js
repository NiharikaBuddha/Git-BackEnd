const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<header><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');

        // Read messages from the file and display them at the top of the form
        const messages = fs.readFileSync('message.txt', 'utf8').split('\n');
        messages.forEach(message => {
            if (message !== '') {
                res.write(`<p>${message}</p>`);
            }
        });

        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            
            // Append the new message to the file
            fs.appendFileSync('message.txt', message + '\n');

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
        return res.end();
});

server.listen(3000); 