import { Sequelize } from "sequelize";

const db = new Sequelize('kehadiran_jamper', 'jamper_db', 'rahasiakita', {
    host: "127.0.0.1",
    dialect: "mysql"
});

export default db;