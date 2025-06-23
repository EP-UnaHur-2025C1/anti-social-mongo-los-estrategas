const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Conexion a MongoDB
connectDB();

//Middleware
app.use(express.json());

const userRoutes = require("./routes/userRoutes")
const commentRoutes = require("./routes/commentRoutes")
const postRoutes = require("./routes/postRoutes")
const tagRoutes = require("./routes/tagRoutes")

// Rutas
app.use('/api/users', userRoutes);
app.use('/Users', userRoutes);
app.use('/Comments', commentRoutes);
app.use('/Posts', postRoutes);
app.use('/Tags', tagRoutes);



const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.join(__dirname, '../docs/swagger_documentation.yaml'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});