const express = require("express")
const app = express()

//const mysql=require("mysql")
const db=require("./models")

const { User } = require("./models")

app.get("/select",(req,res)=>{

User.findAll({ where: {firstName:"harsh"}})
.then((users)=>{
    res.send(users)
})
  .catch((err)=>{
    if(err){
        console.log(err)
    }
  })  
})

app.get("/insert",(req,res)=>{
    User.create({
        firstName:"harsh",
        age:10,
    }).catch((err)=>{
        if(err){
            console.log(err)
        }
    })

    res.send('insert')
})

app.get("/delete",(req,res)=>{
    User.destroy({where:{id:2}})
    res.send("delete")
})
db.sequelize.sync().then((req)=>{

app.listen(3000,()=>{
    console.log("running")
})
})
