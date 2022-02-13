const { Service } = require('../models');

const servicedata = [
  
  {
    service_name: 'CLient Accounts Management',
    gallery_id: 2,
    profiles: 1,
    filename: '02-cosmos-flowers.jpg',
  },
  {
    service_name: 'Data Management',
    gallery_id: 2,
    profiles: 1,
    filename: '02-cosmos-flowers.jpg',
  },
  {
    service_name: 'Digital Modernization',
    gallery_id: 2,
    profiles: 1,
    filename: '02-cosmos-flowers.jpg',
  },
  {
    service_name: 'Counsiltation',
    gallery_id: 2,
    profiles: 1,
    filename: '02-cosmos-flowers.jpg',
  },
  {
    service_name: 'Marketing',
    gallery_id: 2,
    profiles: 1,
    filename: '02-cosmos-flowers.jpg',
  },
  
];

const seedServices = () => Service.bulkCreate(servicedata);

module.exports = seedServices;