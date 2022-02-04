const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Profiles',
    starting_date: 'April 20, 2022 07:00:00',
    ending_date: 'June 21, 2022 17:00:00',
    users: 1,
    servicez: 1,
    gamez: 0,
    videoz: 0
  },
  {
    name: 'Services',
    starting_date: 'June 22, 2022 09:00:00',
    ending_date: 'September 22, 2022 22:00:00',
    users: 1,
    servicez: 1,
    gamez: 0,
    videoz: 0
  },
  {
    name: 'Games',
    starting_date: 'September 23, 2022 08:30:00',
    ending_date: 'December 21, 2022 20:30:00',
    users: 1,
    servicez: 1,
    gamez: 0,
    videoz: 0
  },
  {
    name: 'Videos',
    starting_date: 'December 22, 2020 11:00:00',
    ending_date: 'March 19, 2022 19:00:00',
    users: 1,
    servicez: 1,
    gamez: 0,
    videoz: 0
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
