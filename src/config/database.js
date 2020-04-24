require('dotenv').config()

const sequelize = {
    development: {
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        define: {
            timestamps: true,
            underscored: true,
        },
    },
    test: {
        database: process.env.DB_DATABASE_TEST,
        username: process.env.DB_USERNAME_TEST,
        password: process.env.DB_PASSWORD_TEST,
        dialect: process.env.DB_DIALECT_TEST,
        host: process.env.DB_HOST_TEST,
        define: {
            timestamps: true,
            underscored: true,
        },
    },
    production: {
        database: process.env.DB_DATABASE_PRODUCTION,
        username: process.env.DB_USERNAME_PRODUCTION,
        password: process.env.DB_PASSWORD_PRODUCTION,
        dialect: process.env.DB_DIALECT_PRODUCTION,
        host: process.env.DB_HOST_PRODUCTION,
        define: {
            timestamps: true,
            underscored: true,
        },
    }
}

module.exports = sequelize