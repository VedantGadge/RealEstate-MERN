import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';

export const createUser = asyncHandler(async (req, res) => {
    console.log("Creating a user...");

    const { email } = req.body;

    // Debugging: Log the request body
    console.log("Request Body:", req.body);

    // Check if the user already exists
    const userExists = await prisma.user.findUnique({ where: { email:email } });

    if (!userExists) {
        // Create a new user
        const user = await prisma.user.create({
            data: req.body,
        });
        res.send({
            message: "User registered successfully",
            user: user,
        })
    } else {
        res.status(201).json({ message: "User already registered." });
    }

    console.log("Email:", email);
});

//fn to book a visit to a residency
export const bookVisit = asyncHandler(async (req,res)=> {
    const {email, date} = req.body
    const  {id} = req.params

    try{

        const alreadyBooked = await prisma.user.findUnique({
            where: {email},
            select: {boookedVisits: true}
        })

        if(alreadyBooked.boookedVisits.some((visit) => visit.id == id)){
            res.status(400).json({message: "This residency is already booked by you"})
        }
        else{
            await prisma.user.update({
                where: {email:email},
                data
                : {
                    boookedVisits: {push: {id , date}}
                }
            })
        }
        res.send("Your visit is booked succesfully")

    }catch(err){
        throw new Error(err.message)
    }

});

//fn to get all bookings of a user
export const getAllBookings = asyncHandler(async (req,res)=>{
    const {email} = req.body
    try{
        const bookings = await prisma.user.findUnique({
            where : {email},
            select : {boookedVisits: true} //only selects the bookedVisits field and not the entire document
        })
        res.status(200).send(bookings)
    }catch(err){
        throw new Error(err.message);
    }
});

//fn to cancel the booking
export const cancelBooking = asyncHandler(async (req,res)=> {

    const {email} = req.body;
    const {id} = req.params;
    try{

        const user = await prisma.user.findUnique({
            where : {email: email},
            select : {boookedVisits: true}
        })

        const index = user.boookedVisits.findIndex((visit)=> visit.id == id)

        if(index == -1){
            res.status(404).json({message:"Booking not found."})
        }else{
            user.boookedVisits.splice(index,1)
            await prisma.user.update({
                where: {email},
                data:{
                    boookedVisits: user.boookedVisits
                }
            })

            res.send("Booking cancelled successfully.")
        }

    }catch(err){
        throw new Error(err.message);
    }
})

//fn to add residency in an user's favourites 
export const toFav = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    const {rid} = req.params;

    try{
        const user = await prisma.user.findUnique({
            where: {email}
        })
        if(user.favResidenciesID.includes(rid)){
            const updateUser = await prisma.user.update({
                where: {email},
            data:{
                favResidenciesID:{
                    set: user.favResidenciesID.filter((id)=> id!== rid)
                }
            }
            })

            res.send({message: "Removed from favourites",updateUser})
        }else{
            const updateUser = await prisma.user.update({
                where: {email},
                data: {
                    favResidenciesID:{
                        push: rid
                    }
                }
            })
            
            res.send({message: "Updated favourites",updateUser})
        }

    }catch(err){
        throw new Error(err.message);
    }
})

//fn to get all residencies in favourites list of a specific user
export const allFavourites = asyncHandler(async(req,res)=> {
    const {email} = req.body;
    try{
        const favourites = await prisma.user.findUnique({
            where: {email},
            select: {favResidenciesID: true}
        })

        res.status(200).send(favourites);
    }catch(err){
        return new Error(err.message)
    }
}
)

