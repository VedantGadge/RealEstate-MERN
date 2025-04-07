import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';

export const createResidency = asyncHandler(async (req, res) => {
    const {title, description, price, address, city, country, image, facilities, userEmail} = req.body.data

    console.log(req.body.data)
    try{

        const residency = await prisma.residency.create({data:{
            title, description, price, address, city, country, image, facilities, owner : {connect : {email: userEmail}}
        }});

        res.send({message : "Residency created succesfully", residency});

    }catch(err){
        if(err.code == "P2002"){ //P2002 is a unique code which returns when a unique address cond is violated
            throw new Error("A residency with address already exists")
        }
        throw new Error(err.message)
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
