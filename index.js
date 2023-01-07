const express = require('express')
const app = express();
var port = 3000
const connection = require('./config/db')
const bodyparser = require('body-parser')

app.use(express.static(__dirname + "/frontendCOde"))
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())


app.get('/',(req,res)=>{
    res.redirect("/create.html")
})

// post method
app.post('/create',(req,res)=>{
    console.log(req.body)
    const id = req.body.id
    const name = req.body.name
    const email = req.body.email

    try {
    connection.query('insert into fullstack.data(id,name,email) values(?,?,?)',[id,name,email] ,(error,result)=>{
        if(error){
            console.error(error)
        }else{
            console.log(result)
        }
    })


           } catch (error) {
     console.log(error)
    }
})


app.listen(port ,()=>{
    console.log(`server is running on ${port}`)
})