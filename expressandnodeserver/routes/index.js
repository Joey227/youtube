const express = require('express')
const router = express.Router()

// Welcome page / Home page / Index page
router.get('/', (req, res) => res.render('welcome'))

module.exports = router;