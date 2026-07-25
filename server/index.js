const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/connectToDB");

const app = express();

//////dotenv config (optional)/////////////////////
dotenv.config();
connectToDB();

// Use the environment port when provided, otherwise fall back to 8002
const PORT = Number(process.env.PORT) || 8002;
let server;

//////////////////middlewares////////////////
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Something went wrong", success: false });
});

/////////routes//////////////////////
app.use('/api/user/', require('./routes/userRoutes'))
app.use('/api/admin/', require('./routes/adminRoutes'))
app.use('/api/doctor', require('./routes/doctorRoutes'))

const startServer = (port) => {
    server = app.listen(port, () => {
        console.log(`Server is running on port ${server.address().port}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.warn(`Port ${port} is already in use. Trying ${port + 1}...`);
            if (server.listening) {
                server.close(() => startServer(port + 1));
            } else {
                startServer(port + 1);
            }
        } else {
            throw err;
        }
    });
};

const shutdown = () => {
    if (server) {
        server.close(() => {
            console.log('Server stopped');
            process.exit(0);
        });
    } else {
        process.exit(0);
    }
};

startServer(PORT);
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);