const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')

// EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Body parser
app.use(express.urlencoded({ extended: false }))

// Express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

const PORT = process.env.PORT || 80

app.use('/', require('./routes/index'))

app.listen(PORT, console.log(`Server started on port ${PORT}`))