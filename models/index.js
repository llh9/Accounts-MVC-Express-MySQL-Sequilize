const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Profile = require('./Profile');
const Service = require('./Service');
const Game = require('./Game');
const Video = require('./Video');


Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});
Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

Gallery.hasMany(Profile, {
  foreignKey: 'gallery_id',
})
Profile.belongsTo(Gallery, {
  foreignKey: 'gallery_id', 
})

Gallery.hasMany(Service, {
  foreignKey: 'gallery_id',
})
Service.belongsTo(Gallery, {
  foreignKey: 'gallery_id', 
})

Gallery.hasMany(Game, {
  foreignKey: 'gallery_id',
})
Game.belongsTo(Gallery, {
  foreignKey: 'gallery_id', 
})

Gallery.hasMany(Video, {
  foreignKey: 'gallery_id',
})
Video.belongsTo(Gallery, {
  foreignKey: 'gallery_id', 
})



module.exports = { User, Gallery, Painting, Profile, Service, Game, Video };
