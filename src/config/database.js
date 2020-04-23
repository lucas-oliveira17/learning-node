const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('carrosnode', 'lucas', '123', {
    host: 'lucasviana.brazilsouth.azurecontainer.io',
    dialect: 'postgres',
    define: {
        timestamps: true,
        underscored: true,
    },
})

const DBConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    throw new Error(error)
  }
}

DBConnect();

module.exports = sequelize