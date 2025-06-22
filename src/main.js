const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

const userRoutes = require("./routes/userRoutes")
const commentRoutes = require("./routes/commentRoutes")
const postRoutes = require("./routes/postRoutes")
const tagRoutes = require("./routes/tagRoutes")

// Rutas
app.use('/Users', userRoutes);
app.use('/Comments', commentRoutes);
app.use('/Posts', postRoutes);
app.use('/Tags', tagRoutes);

//Conexion a MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

