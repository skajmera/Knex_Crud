const express=require('express')
const app=express()
// const bodyparser=require('body-parser')

require('./Databases/db')
app.use(express.json())
app.use('',require('./routes/router'))

const Port=2021
app.listen(Port,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${Port}`);
})
