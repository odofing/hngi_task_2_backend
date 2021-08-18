const express = require('express');
const router = express.Router();

const { submitPost, getPosts } = require('../controllers/contact');

// SUBMITS POST
router.post('/contact', submitPost)
router.get('/', getPosts)

module.exports = router;