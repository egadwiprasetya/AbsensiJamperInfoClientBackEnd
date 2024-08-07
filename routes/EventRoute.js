import express from "express";

import {
    getActiveEvent,
} from '../controllers/Event.js';

const router = express.Router();

router.get('/eventAktif/', getActiveEvent);


export default router;