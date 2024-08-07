import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Desa from "./DesaModel.js";
import Kelompok from "./KelompokModel.js";
import Event from "./EventModel.js";
import Jenjang from "./JenjangModel.js";
const { DataTypes } = Sequelize;

const Kehadiran = db.define('kehadiran', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        },
    },
    jenisKelamin: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    desaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    kelompokId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    jenjangId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    metodeAbsen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    waktuKehadiran: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

Desa.hasMany(Kehadiran);
Kehadiran.belongsTo(Desa, { foreignKey: 'desaId' });

Kelompok.hasMany(Kehadiran);
Kehadiran.belongsTo(Kelompok, { foreignKey: 'kelompokId' });

Event.hasMany(Kehadiran);
Kehadiran.belongsTo(Event, { foreignKey: 'eventId' });

Jenjang.hasMany(Kehadiran);
Kehadiran.belongsTo(Jenjang, { foreignKey: 'jenjangId' });

export default Kehadiran;