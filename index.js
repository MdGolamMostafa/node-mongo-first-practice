const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// const rootCall = (req,res) => {
//     res.send('Thank you Allah');
// }

// app.get('/',rootCall);

app.get('/getUser',(req,res) => {
    const user = {name:'Allah ',id:01}
    res.send(user);
})

const users = ['Imon',"Eshan",'saad','sabit','esas']

// get
app.get('/users/:id',(req,res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    // console.log(req.query.sort)
    const name = users[id];
    res.send({id,name});
//     const user = {name: 'node guru', id: 1307};
// const category = user.category;
// res.send(user);
})

//post
app.post('/addUser',(req,res) => {
    // console.log('Data received', req.body);
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('listen port is 3000'))