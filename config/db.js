const mysql = require('mysql2')

// connect with your database
const connection = mysql.createConnection({
    port:3306,
    host:'localhost',
    user:'root',
    password:'Pass@5413',
    database:'fullstack'
  
})

connection.connect((error)=>{
    if(error){
        console.error(error)
    }else{
        console.log('connected to the databse "fullstack" ')
    }
})


module.exports = connection;