module.exports = {
    development: {
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "app_database",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "mysql"
    }
};
