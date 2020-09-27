const express = require('express');
const path = require('path');
const app = express();

//este es un middleware para manejar archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/statics', (req,res)=>{
  res.sendFile(path.join(__dirname,'./public/home.html'));
});

app.set("port",4001);
app.use(express.json());
app.use(express.urlencoded ({extend: false}));

app.listen(app.get("port"), ()=>{
  console.log(`Server on port 4001`);
});

