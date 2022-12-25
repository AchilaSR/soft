require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require("./config/database");
const cors = require('cors');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const http = require("http")
const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})


connectDB();
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());



io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})



// app.post('/', (req, res) => {
//     res.send(req.body);
// });

app.use('/student', require('./routes/studentRoutes')) 
app.use('/teacher', require('./routes/teacherRoutes')) 
app.use('/vidiomeeting', require('./routes/vidiomeetingRoutes'))
 
// app.use('/vmeeting',require('./controllers/vidiomeeting'))

//vidio meeting






const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('server run on port', PORT)); 