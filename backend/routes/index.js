import { Router } from "express";
import { userRouter } from "./adult.js";

const router=Router()

router.get("/",(req,res)=>{
    res.json({
        message:"Healthy route api/v1"
    })
})

router.use("/adult",userRouter)

export {
    router
}