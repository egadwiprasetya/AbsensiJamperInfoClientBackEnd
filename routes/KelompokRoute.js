import express from "express";


import {
    getKelompokByDesa,
} from '../controllers/Kelompok.js';

const router = express.Router();

router.get('/kelompokByDesa/:id', getKelompokByDesa);

export default router;