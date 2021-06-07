import express from 'express'
import controller from './controller';

const router = express.Router({ mergeParams: true });

let { couponCreate, couponStatus, updateStatus } = controller;

router.post('/', couponCreate);
router.get('/status', couponStatus);
router.post('/hide', updateStatus );

export default router;