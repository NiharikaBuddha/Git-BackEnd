const url = require('http');
console.log(url);

const server = url.createServer((req, res) => {
    if (url === '/home') {
        const a='Welcome home';
        console.log('Welcome home');
        res.end(a);
    } else if (url === '/about') {
        const b='Welcome to About Us page';
        console.log('Welcome to About Us page');
        res.end(b);
    } else if (url === '/node') {
        const c='Welcome to my Node Js project';
        console.log('Welcome to my Node Js project');
        res.end(c);
    } else {
        console.log('Invalid URL');
    }
});
  
  server.listen(4000);