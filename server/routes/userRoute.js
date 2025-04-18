import express from 'express'
import { allFavourites, bookVisit, cancelBooking, createUser, getAllBookings, toFav } from '../controllers/userCtrl.js'
import jwtCheck from '../config/auth0Config.js'
const router = express.Router()

router.post('/register', createUser) //we are placing jwtCheck as a middleware , means  new user will pass through jwtCheck then will go to createUser fn
router.post("/bookvisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/cancelBooking/:id", cancelBooking)
router.post("/toFavourites/:rid", toFav)
router.post("/allFavourites", allFavourites)

export { router as userRoute }