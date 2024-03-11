let redis = require("redis");
let client = redis.createClient({
    // url:  process.env.REDIS_URL,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS,
    // username: process.env.REDIS_USER
});

client.on("error", (error) => {
    console.log(error);
});

module.exports = client;