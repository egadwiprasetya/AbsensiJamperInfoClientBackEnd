import express from "express";


import {
    getDesa,
} from '../controllers/Desa.js';

const router = express.Router();

router.get('/desa', getDesa);

export default router;