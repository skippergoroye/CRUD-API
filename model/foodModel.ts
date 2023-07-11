import { Schema, model } from 'mongoose';


export interface IUser {
    foodname: string;
    kind: string;
    images: string,
    calories?: Number;
}


const foodSchema = new Schema ({
    foodname: { 
        type: String, 
        required: true 
    },
    kind: { 
        type: String, 
        required: true 
    },
    images: { 
        type: String, 
        required: true 
    },
    calories: {
        type: Number,
        default: 0,
        // required: true
    },
},
{
    timestamps: true
});


const foodModel = model<IUser>('Food', foodSchema);
export default foodModel


