import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';

export const createResidency = asyncHandler(async (req, res) => {
    const {title, description, price, address, city, country, image, facilities, userEmail} = req.body.data;

    console.log("Received data:", req.body.data);

    // Validation: userEmail must be present
    if (!userEmail) {
        res.status(400).json({ error: "userEmail is required to create a residency." });
        return;
    }

    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                city,
                country,
                image,
                facilities,
                owner: { connect: { email: userEmail } }
            }
        });

        res.send({ message: "Residency created successfully", residency });

    } catch (err) {
        if (err.code == "P2002") {
            throw new Error("A residency with this address already exists");
        }
        throw new Error(err.message);
    }
});

//fn to get all the residencies 
export const getAllResidencies = asyncHandler(async(req,res)=>{
    const residencies = await prisma.residency.findMany({orderBy:{
        createAt: "desc"
    }})
    res.send(residencies);

})

//fn to get a specific residency
export const getResidency = asyncHandler(async(req,res)=>{
    const {id} = req.params; 

    try{

        const residency = await prisma.residency.findUnique({
            where : {id}
        })
        res.send(residency)
    }
    catch(err){
        throw new Error(err.message);
    }

})
