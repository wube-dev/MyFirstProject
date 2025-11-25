const express = require("express");
const app = express();
const mysql = require("mysql2");

// Middleware to parse JSON body
app.use(express.json());

// MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "wube",
  password: "ela12ela",
  database: "mysqlcourse",
});

// Function to display tables in terminal
function showTableData() {
  console.log("\n" + "=".repeat(60));
  console.log("📊 DATABASE TABLES DISPLAY wube here");
  console.log("=".repeat(60));

  const queries = {
    products: "SELECT * FROM Products",
    description: "SELECT * FROM ProductDescription",
    price: "SELECT * FROM ProductPrice",
    joined: `
      SELECT p.product_id, p.product_name, p.product_url,
             d.product_brief_description, pr.starting_price, pr.price_range
      FROM Products p
      // LEFT JOIN ProductDescription d ON p.product_id = d.product_id
      LEFT JOIN ProductPrice pr ON p.product_id = pr.product_id
    `,
  };

  // Display Products table
  connection.query(queries.products, (err, results) => {
    if (err) {
      console.log("❌ Error fetching Products:", err.message);
    } else {
      console.log("\n📦 PRODUCTS TABLE:");
      if (results.length > 0) {
        console.table(results);
      } else {
        console.log("No products found");
      }
    }

    // Display ProductDescription table
    connection.query(queries.description, (err, results) => {
      if (err) {
        console.log("❌ Error fetching ProductDescription:", err.message);
      } else {
        console.log("\n📝 PRODUCT DESCRIPTION TABLE:");
        if (results.length > 0) {
          console.table(results);
        } else {
          console.log("No product descriptions found");
        }
      }

      // Display ProductPrice table
      connection.query(queries.price, (err, results) => {
        if (err) {
          console.log("❌ Error fetching ProductPrice:", err.message);
        } else {
          console.log("\n💰 PRODUCT PRICE TABLE:");
          if (results.length > 0) {
            console.table(results);
          } else {
            console.log("No product prices found");
          }
        }

        // Display Joined data
        connection.query(queries.joined, (err, results) => {
          if (err) {
            console.log("❌ Error fetching joined data:", err.message);
          } else {
            console.log("\n🎯 ALL PRODUCTS SUMMARY (JOINED):");
            if (results.length > 0) {
              console.table(results);
            } else {
              console.log("No joined data found");
            }
          }
          console.log("\n" + "=".repeat(60));
          console.log("✅ Database display complete!");
          console.log("=".repeat(60));
        });
      });
    });
  });
}

connection.connect((err) => {
  if (err) {
    console.log("Error connecting:", err);
  } else {
    console.log("Connected to MySQL!");
    // Show tables when server starts
    setTimeout(showTableData, 1000);
  }
});

// Install / Create tables
app.get("/install", (req, res) => {
  const createProducts = `
    CREATE TABLE IF NOT EXISTS Products(
      product_id INT AUTO_INCREMENT,
      product_name VARCHAR(255) NOT NULL,
      product_url VARCHAR(255) NOT NULL,
      PRIMARY KEY (product_id)
    )`;

  const createProductDescription = `
    CREATE TABLE IF NOT EXISTS ProductDescription(
      description_id INT AUTO_INCREMENT,
      product_id INT NOT NULL,
      product_brief_description VARCHAR(255) NOT NULL,
      product_description VARCHAR(255) NOT NULL,
      product_img VARCHAR(255) NOT NULL,
      product_link VARCHAR(255) NOT NULL,
      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

  const createProductPrice = `
    CREATE TABLE IF NOT EXISTS ProductPrice(
      price_id INT AUTO_INCREMENT,
      product_id INT NOT NULL,
      starting_price VARCHAR(255) NOT NULL,
      price_range VARCHAR(255) NOT NULL,
      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

  connection.query(createProducts, (err) => {
    if (err) console.log("Error creating Products table:", err);
  });
  connection.query(createProductDescription, (err) => {
    if (err) console.log("Error creating ProductDescription table:", err);
  });
  connection.query(createProductPrice, (err) => {
    if (err) console.log("Error creating ProductPrice table:", err);
  });

  res.send("Tables created!");
});

// POST route to insert Product, Description, and Price together
app.post("/insert", (req, res) => {
  const {
    product_name,
    product_url,
    brief_desc,
    full_desc,
    product_img,
    product_link,
    starting_price,
    price_range,
  } = req.body;

  if (!product_name || !product_url) {
    return res.status(400).send("Product name and URL are required");
  }

  // 1️⃣ Insert into Products
  const insertProductQuery =
    "INSERT INTO Products (product_name, product_url) VALUES (?, ?)";
  connection.query(
    insertProductQuery,
    [product_name, product_url],
    (err, result) => {
      if (err) return res.status(500).send("Error inserting product: " + err);

      const productId = result.insertId;
      console.log("Inserted Product ID:", productId);

      // 2️⃣ Insert into ProductDescription
      const insertDescriptionQuery = `
      INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link)
      VALUES (?, ?, ?, ?, ?)`;

      connection.query(
        insertDescriptionQuery,
        [productId, brief_desc, full_desc, product_img, product_link],
        (err2) => {
          if (err2)
            return res.status(500).send("Error inserting description: " + err2);

          // 3️⃣ Insert into ProductPrice
          const insertPriceQuery = `
        INSERT INTO ProductPrice (product_id, starting_price, price_range)
        VALUES (?, ?, ?)`;

          connection.query(
            insertPriceQuery,
            [productId, starting_price, price_range],
            (err3) => {
              if (err3)
                return res.status(500).send("Error inserting price: " + err3);

              // ✅ All inserted successfully
              console.log("\n✨ NEW PRODUCT ADDED!");
              // Refresh table display
              setTimeout(showTableData, 500);

              res.send({
                message:
                  "Product, description, and price inserted successfully!",
                product_id: productId,
              });
            }
          );
        }
      );
    }
  );
});

app.get("/", (req, res) => {
  res.send("Hello ela! Server is working!");
});

// GET route to fetch all products with description and price
app.get("/products", (req, res) => {
  const query = `
    SELECT p.product_id, p.product_name, p.product_url,
           d.product_brief_description, d.product_description, d.product_img, d.product_link,
           pr.starting_price, pr.price_range
    FROM Products p
    LEFT JOIN ProductDescription d ON p.product_id = d.product_id
    LEFT JOIN ProductPrice pr ON p.product_id = pr.product_id
  `;
  connection.query(query, (err, results) => {
    if (err) return res.status(500).send("Error fetching products: " + err);
    res.json(results);
  });
});

// NEW ROUTE: Display tables in terminal on demand
app.get("/show-tables", (req, res) => {
  showTableData();
  res.json({
    message: "Check your terminal for table display!",
    instructions:
      "Tables are displayed in the terminal where server is running",
  });
});

// NEW ROUTE: Clear all data (for testing)
app.get("/clear", (req, res) => {
  const clearQueries = [
    "DELETE FROM ProductPrice",
    "DELETE FROM ProductDescription",
    "DELETE FROM Products",
    "ALTER TABLE Products AUTO_INCREMENT = 1",
    "ALTER TABLE ProductDescription AUTO_INCREMENT = 1",
    "ALTER TABLE ProductPrice AUTO_INCREMENT = 1",
  ];

  let completed = 0;

  clearQueries.forEach((query) => {
    connection.query(query, (err) => {
      if (err) console.log("Error clearing:", err.message);
      completed++;

      if (completed === clearQueries.length) {
        console.log("\n🗑️ ALL DATA CLEARED!");
        setTimeout(showTableData, 500);
        res.send("All data cleared from tables!");
      }
    });
  });
});

// NEW ROUTE: Add sample data
app.get("/add-sample", (req, res) => {
  const sampleProducts = [
    {
      product_name: "MacBook Pro 16",
      product_url: "macbook-pro-16",
      brief_desc: "Powerful laptop for professionals",
      full_desc: "Apple MacBook Pro with M3 Max chip, 32GB RAM, 1TB SSD",
      product_img: "macbook-pro-16.jpg",
      product_link: "https://apple.com/macbook-pro",
      starting_price: "2499.99",
      price_range: "$2499-$3999",
    },
    {
      product_name: "iPhone 15 Pro",
      product_url: "iphone-15-pro",
      brief_desc: "Latest iPhone with titanium design",
      full_desc: "Apple iPhone 15 Pro with A17 Pro chip, Titanium design",
      product_img: "iphone-15-pro.jpg",
      product_link: "https://apple.com/iphone-15-pro",
      starting_price: "999.00",
      price_range: "$999-$1299",
    },
  ];

  let completed = 0;

  sampleProducts.forEach((product) => {
    const {
      product_name,
      product_url,
      brief_desc,
      full_desc,
      product_img,
      product_link,
      starting_price,
      price_range,
    } = product;

    const insertProductQuery =
      "INSERT INTO Products (product_name, product_url) VALUES (?, ?)";
    connection.query(
      insertProductQuery,
      [product_name, product_url],
      (err, result) => {
        if (err) {
          console.log("Error inserting product:", err.message);
          return;
        }

        const productId = result.insertId;

        // Insert description
        const insertDescQuery =
          "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)";
        connection.query(
          insertDescQuery,
          [productId, brief_desc, full_desc, product_img, product_link],
          (err) => {
            if (err) console.log("Error inserting description:", err.message);

            // Insert price
            const insertPriceQuery =
              "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)";
            connection.query(
              insertPriceQuery,
              [productId, starting_price, price_range],
              (err) => {
                if (err) console.log("Error inserting price:", err.message);

                completed++;
                console.log(`✅ Added sample product: ${product_name}`);

                if (completed === sampleProducts.length) {
                  console.log("\n🎉 ALL SAMPLE DATA ADDED!");
                  setTimeout(showTableData, 1000);
                  res.send("Sample data added successfully! Check terminal.");
                }
              }
            );
          }
        );
      }
    );
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Available routes:");
  console.log("  GET  /              - Home page");
  console.log("  GET  /install       - Create tables");
  console.log("  GET  /show-tables   - Display tables in terminal");
  console.log("  GET  /add-sample    - Add sample data");
  console.log("  GET  /clear         - Clear all data");
  console.log("  GET  /products      - Get all products (JSON)");
  console.log("  POST /insert        - Insert new product");
});
