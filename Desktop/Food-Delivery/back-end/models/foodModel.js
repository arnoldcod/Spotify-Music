import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {typeof: string, required: true},
    image: {typeof: string, required: true},
    price: {typeof: Number, required: true},
    description: {typeof: string, required: true},
    category: {typeof: string, required: true},
})

const foodModel = mongoose.models.food || mongoose.Model("food", foodSchema);

export default foodModel;