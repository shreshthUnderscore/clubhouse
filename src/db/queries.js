const pool = require("./pool");

async function selectTable() {
  const { rows } = await pool.query("select * from users");
  return rows;
}

module.exports = {
  selectTable,
};
