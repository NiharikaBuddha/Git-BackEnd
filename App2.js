const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    // res.send('<body><form><input type ="text" name="UserName"><button type="submit">Login</button></form></body>')
    res.send('<h1>Hello</h1>')
})

app.get('/',(req,res)=>{
    // res.send('<body><form><input type ="text" name="UserName"><button type="submit">Login</button></form></body>')
    console.log("hello");
    res.redirect('/products')
})

const products = [{id:1,name : "iphone"},{id:2,name : "mi"},{id:3,name : "realme"}]

app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    const newData = products.filter(item=> item.id.toString() === req.params.id)
    return res.json(newData)
})

app.post('/addProducts',(req,res)=>{
    const {id,name} = req.body;
    console.log(id,name);
    return res.send('Data Stored')
})

app.listen(5000)