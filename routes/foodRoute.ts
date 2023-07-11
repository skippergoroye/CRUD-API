import express, { Router } from "express"
import { createFood, getAllFoods, getOneFood, updateFood, deleteFood } from "../controller/foodController"


import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req: any, file: any, cb: any) {
      // Use the current timestamp as the file name
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix);
}});

const upload = multer({ storage: storage });




const router= express.Router()


router.post('/createfood', upload.single('images'), createFood)
router.get('/getallfoods', getAllFoods)
router.get('/getonefood/:id', getOneFood)
router.patch('/updateonefood/:id', updateFood)
router.delete('/deleteonefood/:id', deleteFood)



export default router