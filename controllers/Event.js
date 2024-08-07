import Event from '../models/EventModel.js'


export const getActiveEvent = async (req, res) => {
    try {
        const response = await Event.findOne({
            attributes: ['id', 'uuid', 'event', 'tanggal', 'waktu', 'status', 'statusForAdmin', 'location', 'wajibLocation'],
            where: {
                status: 'AKTIF'
            }
        });
        if (!response) return res.status(200).json({ msg: "TIDAK ADA EVENT AKTIF" });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}