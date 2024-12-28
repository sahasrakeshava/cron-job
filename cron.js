const https = require("https");

// Function to ping the API
const ping = () => {
  https
    .get("https://kaveri-tailors-backend.onrender.com", (res) => {
      console.log(`Pinged the API. Status Code: ${res.statusCode}`);
    })
    .on("error", (err) => {
      console.error("Error pinging the API:", err.message);
    });
};

// Ping immediately on start
ping();

// Schedule the ping every 5 minutes (5 * 60 * 1000 ms)
setInterval(ping, 5 * 60 * 1000);
