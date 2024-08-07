import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Desa from "./DesaModel.js";
const { DataTypes } = Sequelize;

const Kelompok = db.define('kelompok', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    kelompok: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    desaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
}
);

Desa.hasMany(Kelompok);
Kelompok.belongsTo(Desa, { foreignKey: 'desaId' });

export default Kelompok;
