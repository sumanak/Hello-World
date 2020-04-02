import express from 'express';

import { hello } from '../controllers/HelloController';
const router = express.Router();

router.get('/hello', hello);

export default router;
