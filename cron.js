const https = require("https");
setInterval(() => {
    https.get("https://kaveri-tailors-backend.onrender.com");
    console.log("Pinged the API to keep it alive");
}, 5 * 60 * 1000); // Every 5 minutes
