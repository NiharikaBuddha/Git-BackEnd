const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json');
    
const getProductsFromFile = callback => {

    fs.readFile(p, (err,fileContent)=>{
        if(err){
            callback([]);
        }else{
            callback(JSON.parse(fileContent));
        }
    });
    return products;
}

const products = [];

module.exports = class product{
    constructor(t){
        this.title = t;
    }

    save(){
        getProductsFromFile(products =>{
        products.push(this);
        fs.writeFile(p, JSON.stringify(products),(err)=>{
            console.log(err);
        });
    });
    }

    static fetchAll(callback){
        getProductsFromFile(callback);
    }
}

// 