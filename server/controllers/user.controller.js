import userModel from "../models/user.model.js";

export const registerUserController = async(req, res)=>{
    try {
        let {username,email,password} = req.body;;
        
        //cheking
        if(!username || !email || !password){
            res.status(400).json({
                message:"All fields are required"
            })
        }

        
        //cheking if user already exists
        let user = await userModel.findOne({email});
        if(user){
            res.status(400).json({
                message:"User already exists"
            })
        }


        let newUser = await userModel.create({
            username,
            email,
            password
        })

        res.status(201).json({
            success:true,
            message:"User registered successfully",
            newUser
        })


    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            error,
            
        })
    }
}