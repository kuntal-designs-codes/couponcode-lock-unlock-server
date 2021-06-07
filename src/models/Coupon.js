import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Schema
const CouponSchema = new Schema({

    coupon_title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coupon_code: {
        type: String,
        required: true
    },
    isSeen: {
        type: Boolean,
        required: true
    },
    createdAt: { type: Date, default: Date.now },

});

const Coupon = mongoose.model("coupon", CouponSchema);

export default Coupon;