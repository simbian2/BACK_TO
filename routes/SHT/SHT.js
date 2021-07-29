const express = require('express')
const router = express.Router()
const {FeedBack, FAQ, calculator1, calculator2} = require('../../models')

router.get('/',async(req,res,next)=>{
    try{
        const data = await FAQ.findAll({}) 
        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

router.post('/',async(req,res,next)=>{

    const {income,Resident_period,Resident_Location,Number_Of_Payment,Applying_Location} = req.body

    try{
        const data = await calculator1.create({
            income:income,
            Resident_Period:Resident_period,
            Resident_Location:Resident_Location,
            Number_Of_Payment:Number_Of_Payment,
            Applying_Location:Applying_Location

        })

        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})



module.exports = router
