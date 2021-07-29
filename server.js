const express = require('express')
const bodyParser = require('body-parser')
// npm install body-parser
const app = express()
const db = require('./models')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false,}))

db.sequelize.sync({focus:false}) // promise object
.then(()=>{
    console.log('DB 접속 성공');
})
.catch( error=>{
    console.log(`DB 접속 실패 : ${error} `)
})

app.post('/',async(req,res,next)=>{

    const {income,Resident_period,Resident_Location,Number_Of_Payment,Applying_Location} = req.body

    try{
        const data = await calculator1.create({
            income:income,
            Resident_Period:Resident_period,
            Resident_Location:Resident_Location,
            Number_Of_Payment:Number_Of_Payment,
            Applying_Location:Applying_Location

        })

        res.json('df')
    } catch (error) {
        console.error(error)
        next(error)
    }
})


app.get('/',(req,res)=>{
    res.send('sadgsdg')
})

app.listen(4000,()=>{
    console.log('start server port 4000')    
})

