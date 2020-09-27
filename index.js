const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/getUser',(req,res) => {
    const user = {name:'Allah ',id:01}
    res.send(user);
})

const users = ['Imon',"Eshan",'saad','sabit','esas']

// get
app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})

//post
app.post('/addUser',(req,res) => {
    const user = req.body;
    user.id = 0001;
    res.send(user);
})

app.listen(3000, () => console.log('listen port is 3000'))