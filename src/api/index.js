import express from 'express';

const router = express.Router();
// any new resource api should imported here and then registered to
// router with proper api endpoint prefix (e.g /user user.route, /items items.route etc.)
import coupon from './coupon';

// router.use("/user", user.route);

router.use('/coupon', coupon.route);

// module.exports = router;
export default router