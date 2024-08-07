import Kehadiran from '../models/KehadiranModel.js'
import Desa from "../models/DesaModel.js";
import Kelompok from "../models/KelompokModel.js";
import Event from "../models/EventModel.js";
import Jenjang from "../models/JenjangModel.js";
import { Op } from "sequelize";


export const createKehadiran = async (req, res) => {
    console.log(req.body);
    const { eventId, nama, jenisKelamin, desaId, kelompokId, jenjangId, metodeAbsen } = req.body;
    try {
        await Kehadiran.create({
            eventId: eventId,
            nama: nama,
            jenisKelamin: jenisKelamin,
            desaId: desaId,
            kelompokId: kelompokId,
            jenjangId: jenjangId,
            waktuKehadiran: new Date(),
            metodeAbsen: metodeAbsen
        });
        res.status(201).json({ msg: "Kehadiran Masuk" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.msg });
    }
}