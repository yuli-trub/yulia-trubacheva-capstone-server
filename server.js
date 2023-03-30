const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const knex = require("knex")(require("./knexfile.js")).development;

const app = express();
const PORT = process.env.PORT || 5050;

require("dotenv").config();

app.use(express.json());

// app.use(helmet());

// // ROUTES
// const eventsRoutes = require("./routes/events.js");
// const interestsRoutes = require("./routes/interests.js");
const locationsRoutes = require("./routes/locations.js");
// const profilesRoutes = require("./routes/profiles.js");

// app.use("/api/events", eventsRoutes);
// app.use("/api/interests", interestsRoutes);
app.use("/api/locations", locationsRoutes);
// app.use("/api/profiles", profilesRoutes);
// app.use("/api/users", userssRoutes);

// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
