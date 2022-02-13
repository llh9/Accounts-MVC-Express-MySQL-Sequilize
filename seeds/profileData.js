const { Profile } = require('../models');

const profiledata = [
  {
    username: 'Landon Hinkle Jr',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
  {
    username: 'Meccaded Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
  {
    username: 'Katie  Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
  {
    username: 'Xavier Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
  {
    username: 'Celia Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;