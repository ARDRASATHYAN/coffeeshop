const express = require('express')
const categoryModel = require('../models/categoryModel')
const categoryRouter = express.Router()



categoryRouter.post('/category',async function(req,res){
    try{
       
       const category= {
          
           
            
        category:req.body.category,
        photo:req.body.photo,
           

        }
        const datas = await categoryModel(category).save()
       
        if(datas){
           
            return res.status(200).json({
                success:true,
                error:false,
                massege:"category added",
                data:datas,
            })
        }
    }catch{

        return res.status(400).json({
            success:false,
            error:true,
            message:"something went wrong",
            
        })
    }
})



categoryRouter.get('/viewcategory', async function (req, res) {
    try {
        const categorys= await categoryModel.find()
        if (categorys[0]!=undefined) {
            return res.status(200).json({
                success: false,
                error: true,
                data: categorys,
            })
        }
        else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "no data found",
            })
        }

    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "Something went wrong",
        })
    }

})


module.exports =categoryRouter