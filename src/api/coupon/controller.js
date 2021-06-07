import Coupon from '../../models/Coupon'


const createCoupon = async (req, res, next) => {

    try {
        let { couponCode, isSeen, couponTitle, imageUrl, description } = req.body;

        const coupon = new Coupon({
            coupon_title: couponTitle,
            image_url: imageUrl,
            description,
            coupon_code: couponCode,
            isSeen
        });

        const result = await coupon.save();

        return res.status(200).json({ result });

    } catch (e) {
        // console.log(e);
        next(e);
    }

}

const getcouponStatus = async (req, res, next) => {
    try {
        let { coupon_id } = req.body;
        // let couponId = Number(coupon_id);
        // console.log(coupon_id);
        const result =  await Coupon.findById(coupon_id, { _id: 0, isSeen: 1 });
        return res.status(200).json({ result });
    } catch(e) {
        next(e)
    }
}

const updatecouponStatus = async ( req, res, next ) => {
    try {
        let { coupon_id } = req.body;
        const result = await Coupon.findOneAndUpdate({ _id: coupon_id }, {isSeen: false});
        return res.status(200).json({ result });
    } catch(e) {
        next(e)
    }
}

export default {
    couponCreate: createCoupon,
    couponStatus: getcouponStatus,
    updateStatus: updatecouponStatus
}