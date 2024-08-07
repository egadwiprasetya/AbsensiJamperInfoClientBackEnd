import express from "express";

import {
    createKehadiran,
} from '../controllers/Kehadiran.js';

const router = express.Router();


router.post('/kehadiran', createKehadiran);

export default router;