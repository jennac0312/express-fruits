//  load express on to our server
const express = require("express")

//  instantiating express
const app = express()
const PORT = 3000


// MIDDLEWARE ------------------------------------------------------------

// ROUTES ----------------------------------------------------------------


//  tell our express app to "listen" to whatever port
app.listen(PORT, ( req, res ) => {
    console.log(`Server is listening on port ${PORT}`)
})