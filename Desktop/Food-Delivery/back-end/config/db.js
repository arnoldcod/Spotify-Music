import { mongoose } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arnoldcod:arnoldRutherfordpy5@cluster0.crbur.mongodb.net/Food-delivery').then(()=> console.log('DB Connected'))
}