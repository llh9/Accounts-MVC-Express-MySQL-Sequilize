const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');
const seedProfiles = require('./profileData');
const seedGames = require('./gameData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPaintings();

  await seedProfiles();

  await seedGames();

  process.exit(0);
};

seedAll();
