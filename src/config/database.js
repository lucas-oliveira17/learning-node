const sequelize = {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    define: {
        timestamps: true,
        underscored: true,
    },
}

module.exports = sequelize