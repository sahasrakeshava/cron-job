const https = require("https");

// List of API routes to ping
const routes = [
  "/",
  "/auth",
  "/api",
  "/api/users",
  "/api/products",
  "/api/admin/products",
  "/api/cart",
  "/api/cart_items",
  "/api/orders",
  "/api/reviews",
  "/api/admin/orders",
  "/api/payments",
];

// Base URL of your API
const baseURL = "https://kaveri-tailors-backend.onrender.com";

// Function to ping all API routes
const pingRoutes = () => {
  routes.forEach((route) => {
    const url = `${baseURL}${route}`;
    https
      .get(url, (res) => {
        console.log(`Pinged ${route}. Status Code: ${res.statusCode}`);
      })
      .on("error", (err) => {
        console.error(`Error pinging ${route}:`, err.message);
      });
  });
};

// Ping immediately on start
pingRoutes();

// Schedule the ping every 5 minutes (5 * 60 * 1000 ms)
setInterval(pingRoutes, 5 * 60 * 1000);
