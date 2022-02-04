const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Profile = require('./Profile');

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

module.exports = { User, Gallery, Painting, Profile };
