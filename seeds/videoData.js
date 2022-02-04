const { Video } = require('../models');

const videodata = [
  {
    title: 'Video 01',
    gallery_id: 4,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
  {
   title: 'Video 02',
    gallery_id: 4,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
  {
   title: 'Video 03',
    gallery_id: 4,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
  {
   title: 'Video 04',
    gallery_id: 4,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
  {
   title: 'Video 05',
    gallery_id: 4,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
  },
];

const seedVideos = () => Video.bulkCreate(videodata);

module.exports = seedVideos;