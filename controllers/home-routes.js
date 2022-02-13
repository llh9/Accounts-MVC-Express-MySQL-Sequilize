const router = require('express').Router();
const { Gallery, Painting, Profile, Game, Service, Video } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      //include models that are associated 
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
        {
          model: Profile, 
          attributes: ['username', 'filename'],
        },
        {
          model: Game, 
          attributes: ['title', 'profiles', 'filename'],
        }
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );
    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/gallery/:id', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
        {
          model: Profile,
          attributes: [
            'id',
            'username',
            'filename',
          ],
        },
        {
          model: Service,
          attributes: [
            'id',
            'service_name',
            'filename',
            'profiles',
          ],
        },
        {
          model: Game,
          attributes: [
            'id',
            'title',
            'filename',
            'profiles',
          ],
        },
        {
          model: Video,
          attributes: [
            'id',
            'title',
            'filename',
            'profiles',
          ],
        },
      ],
    });

    const gallery = dbGalleryData.get({ plain: true });
    res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });
    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one profile
router.get('/profile/:id', async (req, res) => {
  try {
    const dbProfileData = await Profile.findByPk(req.params.id);

    const profile = dbProfileData.get({ plain: true });
    res.render('profile', { profile, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one service
router.get('/service/:id', async (req, res) => {
  try {
    const dbServiceData = await Service.findByPk(req.params.id);

    const service = dbServiceData.get({ plain: true });
    res.render('service', { service, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one game
router.get('/game/:id', async (req, res) => {
  try {
    const dbGameData = await Game.findByPk(req.params.id);

    const game = dbGameData.get({ plain: true });
    res.render('game', { game, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one video
router.get('/video/:id', async (req, res) => {
  try {
    const dbVideoData = await Video.findByPk(req.params.id);

    const video = dbVideoData.get({ plain: true });
    res.render('video', { video, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
