const { Game } = require('../models');

const gamedata = [
  
  {
    title: 'Halo',
    gallery_id: 3,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
    games: 1,
  },
  {
    title: 'CrackDown 3',
    gallery_id: 3,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
    games: 1,
  },
  {
    title: 'Minecraft',
    gallery_id: 3,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
    games: 1,
  },
  {
    title: 'Roblox',
    gallery_id: 3,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
    games: 1,
  },
  {
    title: 'DragonBall Z Xenoverse',
    gallery_id: 3,
    profiles: 1,
    filename: '07-autumn-mountains.jpg',
    games: 1,
  },
  
];

const seedGames = () => Game.bulkCreate(gamedata);

module.exports = seedGames;