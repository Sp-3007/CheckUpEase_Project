const db = require("../config/database");

exports.register = async (req, res) => {
  const { name, country_code, mobile_number, email, password } = req.body;

  try {
    // Establish connection
    const connection = await db.getConnection();

    try {
      // Perform the query
      const [result] = await connection.query(
        "INSERT INTO users (name, country_code, mobile_number, email, password) VALUES (?, ?, ?, ?, ?)",
        [name, country_code, mobile_number, email, password]
      );
      res
        .status(201)
        .json({
          id: result.insertId,
          name,
          country_code,
          mobile_number,
          email,
        });
    } catch (queryError) {
      res.status(400).json({ error: queryError.message });
    } finally {
      // Release the connection back to the pool
      connection.release();
    }
  } catch (connectionError) {
    res.status(500).json({ error: "Unable to connect to the database" });
  }
};
