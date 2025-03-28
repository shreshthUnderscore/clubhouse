const { Pool } = require("pg");
require("dotenv").config();

// Again, this should be read from an environment variable
const pool = new Pool({
  connectionString: `${process.env.POSTGRES_URL}`,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
