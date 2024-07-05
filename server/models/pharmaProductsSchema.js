import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
//   imgsrc: {
//     type: String,
//     required: false,
    
//   },
  title: {
    type: String,
    required: true,
   
  },
  indication: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  sideEffects: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);
export default Product;
