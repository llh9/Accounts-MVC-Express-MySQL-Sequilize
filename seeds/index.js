const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');
const seedProfiles = require('./profileData');
const seedServices = require('./serviceData');
const seedGames = require('./gameData');
const seedVideos = require('./videoData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedProfiles();

  await seedServices();

  await seedGames();

  await seedVideos();

  await seedPaintings();

  process.exit(0);
};

seedAll();
