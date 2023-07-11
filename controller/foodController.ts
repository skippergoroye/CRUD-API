import { Request, Response, NextFunction } from 'express';
import foodModel from '../model/foodModel';
import { IUser } from '../model/foodModel';




export const createFood = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { foodname, kind, calories } = req.body

        

        if(!foodname || !kind || !calories){
            return res.status(400).json({ message: "Please include all fields"})
        }

      

        
        const food = new foodModel(req.body)

        const savedFood = await food.save()

        if(savedFood){
            return res.status(200).json({
                messsage: "Food saved successfully",
                savedFood
            })
        } else {
            return res.status(400).json({
                message: "Fail to save food"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Error: "Internal server Error",
            route: "/food/createFood",
        });  
    }
}




export const getAllFoods = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const foods = await foodModel.find({})

        return res.status(200).json({
            foods
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Error: "Internal server Error",
            route: "/food/createFood",
        });  
    }
}


export const getOneFood = async(req: Request, res: Response, next: NextFunction) => {
    try {

        const { id } = req.params

        const food = await foodModel.findById(id)


        return res.status(200).json({
            food
        })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Error: "Internal server Error",
            route: "/food/createFood",
        }); 
    }
}


export const updateFood = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const updateFood = await foodModel.findByIdAndUpdate(id, {$set: req.body}, {new: true})

        return res.status(200).json({
            message: "Food updated successfully",
            updateFood
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Error: "Internal server Error",
            route: "/food/createFood",
        }); 
    }
}



export const deleteFood = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const deleteFood = await foodModel.findByIdAndRemove(id)


        return res.status(200).json({
            message: "Food deleted successfully"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Error: "Internal server Error",
            route: "/food/createFood",
        }); 
    }
}





