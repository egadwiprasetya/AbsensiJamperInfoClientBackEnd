import Desa from '../models/DesaModel.js'

export const getDesa = async (req, res) => {
    try {
        const response = await Desa.findAll({
            attributes: ['id', 'uuid', 'desa', 'daerah']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

