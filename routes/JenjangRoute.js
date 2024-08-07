import express from "express";

import {
    getJenjang,
} from '../controllers/Jenjang.js';

const router = express.Router();

router.get('/jenjang', getJenjang);

export default router;