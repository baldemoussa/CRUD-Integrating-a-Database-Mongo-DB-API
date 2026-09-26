const express = require('express');
// Require dotenv here as well so process.env.PORT is read correctly
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

// Import the database connection function
const connectDB = require('./config/connection');

// EXECUTE the connection logic
connectDB();

app.use(express.json());

// Import the product routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});