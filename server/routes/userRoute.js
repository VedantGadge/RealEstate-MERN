import express from 'express'
import { allFavourites, bookVisit, cancelBooking, createUser, getAllBookings, toFav } from '../controllers/userCtrl.js'
const router = express.Router()

router.post('/register', createUser)
router.post("/bookvisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/cancelBooking/:id", cancelBooking)
router.post("/toFavourites/:rid", toFav)
router.post("/allFavourites", allFavourites)

export { router as userRoute}