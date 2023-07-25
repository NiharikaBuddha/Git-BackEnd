const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

    app.get('/login',(req,res)=>{
    res.send(`
        <form action="/login" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
         <input id="username" type="text" name="username" placeholder="username">
         <button type="submit">Login</button>
         </form`
       );
    });

    app.post('/login', (req, res) => {
        console.log(req.body.username)
        // console.log(req.body.message)
        fs.writeFile("username.txt", `${req.body.username +' '}`, { flag: 'a' }, (err) => {
            err ? console.log(err) : res.redirect("/")
        });
    });

    app.get('/', (req, res) => {
        fs.readFile('username.txt', (err, data) => {
            if(err){
                console.log(err)
                data = 'No chat Exists'
            }
            res.send(`
               ${data}<form action="/" method="POST" onSubmit="document.getElementById('username')">
                  <input type="text" id="message" name="message">
                  <input type="hidden" id="username" name="username" >
                  <br />
                  <button type="submit">Send</button>
             </form>`
           );
        });
        
      });

      app.post('/', (req, res) => {
        fs.writeFile("username.txt",`: ${req.body.message} `, {flag: 'a'}, (err) =>
            err ? console.log(err) : res.redirect("/")
        );
      });
    

app.listen(3000)