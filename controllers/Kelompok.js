import Kelompok from '../models/KelompokModel.js'
import Desa from "../models/DesaModel.js";
import { Op } from "sequelize";



export const getKelompokByDesa = async (req, res) => {
    try {
        const desa = await Desa.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!desa) return res.status(404).json({ msg: "Data tidak ditemukan" });

        const response = await Kelompok.findAll({
            attributes: ['id','uuid', 'kelompok'],
            where: {
                desaId: desa.id
            },
            include: [
                {
                    model: Desa,
                    attributes: ['id','desa']
                }
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
