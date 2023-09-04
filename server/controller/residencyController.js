import asyncHandler from 'express-async-handler'
import { prisma } from '../config/prismaConfig.js'

// Create a residency
export const createResidency = asyncHandler(async (req, res) => {
    const { title, description, price, address, country, city, facilities, image, userEmail } = req.body.data;

    try {
        // Perform input validation here (e.g., using Joi or express-validator) to ensure data integrity

        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                country,
                city,
                facilities,
                image,
                owner: {
                    connect: { email: userEmail }
                },
            },
        });

        res.status(201).json({ message: "Residency created successfully", residency });
    } catch (err) {
        if (err.code === "P2002") {
            return res.status(400).json({ message: "A residency with the same address already exists" });
        }
        console.error("Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// get all residences
export const getAllResidencies = asyncHandler(async(req,res) => {
    const residencies = await prisma.residency.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    res.send(residencies)
})

// get a specific residence
export const getResidency = asyncHandler(async(req, res) => {
    const {id} = req.params

    try{
        const residency = await prisma.residency.findUnique({
            where: { id },
        });
        res.send(residency);
    } catch (err) {
        throw new Error(err.message); 
    }
})