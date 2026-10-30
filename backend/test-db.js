const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/.env' });

const uri = process.env.MONGODB_URI;

console.log('Testing MongoDB connection...');
if (!uri || uri.includes('<username>') || uri.includes('<password>')) {
  console.error('[Error]: MONGODB_URI in backend/.env is still a placeholder. Please paste your actual connection string.');
  process.exit(1);
}

mongoose.connect(uri)
  .then((conn) => {
    console.log(`[Success]: Connected to MongoDB database: ${conn.connection.name} at ${conn.connection.host}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(`[Connection Error]: ${err.message}`);
    process.exit(1);
  });

