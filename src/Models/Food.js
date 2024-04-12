import mongoose, { Schema } from 'mongoose';
const foodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true },
);
const Food = mongoose.model('Food', foodSchema);
export default Food;
