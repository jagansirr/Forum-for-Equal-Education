const sequelize = require('./database');
const User = require('./models/User');

(async () => {
  try {
    await sequelize.sync({ force: true }); // Set `force: true` for development to reset tables
    console.log('Database synced');
  } catch (err) {
    console.error('Error syncing database:', err);
  }
})();
