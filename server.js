const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const knex = require("knex")(require("./knexfile.js"));
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 5050;
const { FRONTEND_URL } = process.env;
const CHAT_PORT = process.env.CHAT_PORT || 8081;

// Set up Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cord: {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User ${socket.id} joined room: ${data}`);
  });

  socket.on("send_msg", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_msg", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnecter", socket.id);
  });
});

require("dotenv").config();
app.use(cors({ origin: FRONTEND_URL }));

app.use(express.json());

// app.use(helmet());

// // ROUTES
const eventsRoutes = require("./routes/events.js");
const interestsRoutes = require("./routes/interests.js");
const locationsRoutes = require("./routes/locations.js");
const profilesRoutes = require("./routes/profiles.js");
const usersRoutes = require("./routes/users_auth.js");

app.use("/api/events", eventsRoutes);
app.use("/api/interests", interestsRoutes);
app.use("/api/locations", locationsRoutes);
app.use("/api/profiles", profilesRoutes);
app.use("/api/users", usersRoutes);

server.listen(CHAT_PORT, () => {
  console.log(`Chat server is running on port ${CHAT_PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
