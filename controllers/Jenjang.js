import Jenjang from '../models/JenjangModel.js'

export const getJenjang = async (req, res) => {
    try {
        const response = await Jenjang.findAll({
            attributes: ['id', 'uuid', 'jenjang']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

