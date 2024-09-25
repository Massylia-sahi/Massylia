const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  
  process.env.DATABASE_NAME, // pour recuperer le nom
  process.env.DATABASE_USERNAME, // Pour recuperer le nom d'utilisateur
  process.env.DATABASE_PASSEWORD,
  {
    host:  process.env.DATABASE_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
