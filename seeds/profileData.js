const { Profile } = require('../models');

const profiledata = [
  
  {
    username: 'Landon Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',

  },
  {
    username: 'lkjsdasd Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',

  },
  {
    username: 'dasljfa  Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',

  },
  {
    username: 'asdoijav Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',

  },
  {
    username: 'aadoivjad Hinkle',
    gallery_id: 1,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',

  },
  
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;