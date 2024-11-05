import prisma from "lib/prisma";

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Main handler function
export default async function handler(req, res) {
    const { method } = req;

    // Handle CORS preflight request
    if (method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    try {
        if (method === 'GET') {
            // Handler for GET request to retrieve all statuses
            const statusList = await prisma.status.findMany({
                include: {
                    bookings: true, // Optionally include related Booking information if needed
                },
            });

            return res.status(200).json(statusList);
        } else if (method === 'POST') {
            // Handler for POST request to create a new status
            const data = await req.json();

            // Validate required fields
            const { nama } = data;
            if (!nama) {
                return res.status(400).json({ error: 'Field "nama" is required' });
            }

            // Create a new status
            const newStatus = await prisma.status.create({
                data: { nama },
            });

            return res.status(201).json(newStatus);
        } else {
            // Method not allowed
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error handling request:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}