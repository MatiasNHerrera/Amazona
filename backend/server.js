const express = require('express');
const data = require('./Data');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));

app.get('/api/products', (req, res) =>{

    res.send(data.default.products);
})

app.get('/api/products/:id', (req, send) =>{ 
    
    const productId = req.params.id;
    const product = data.default.products.find(prod => prod.id == productId);

    if(product)
        send.send(product);
    else
        send.status(404).send({Msg: 'Product Not Found'});
})


app.listen(5000, () => {
    console.log('The server is running');
})