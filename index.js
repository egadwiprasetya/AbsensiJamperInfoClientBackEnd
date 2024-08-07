import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
// import SequelizeStore from "connect-session-sequelize";

import DesaRoute from "./routes/DesaRoute.js";
import KelompokRoute from "./routes/KelompokRoute.js";
import EventRoute from "./routes/EventRoute.js";
import JenjangRoute from "./routes/JenjangRoute.js";
import KehadiranRoute from "./routes/KehadiranRoute.js";

dotenv.config();


const app = express();
app.use(express.json());


app.use(function (req, res, next) {

    var allowedDomains = ['http://103.161.184.146:3000', 'https://absensi.jamper.info', 'http://127.0.0.1:3000','http://gafoe.com','https://jamper.info'];
    var origin = req.headers.origin;
    if (allowedDomains.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
})


app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
});



app.use(DesaRoute);
app.use(EventRoute);
app.use(JenjangRoute);
app.use(KehadiranRoute);
app.use(KelompokRoute);

// store.sync(); KARNA TABLE SESSION SUDAH ADA, DI UNCOMMENT JIKA BARU PERTAMA KALI

