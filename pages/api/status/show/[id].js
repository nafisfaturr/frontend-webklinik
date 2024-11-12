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
        // GET request to find a status by ID
        if (method === 'GET') {
            const { id } = req.query; // Using req.query to extract ID from query parameters
            
            // Find a status by ID
            const status = await prisma.status.findUnique({
                where: { id: Number(id) }, // Convert id to number if necessary
                include: {
                    bookings: true, // Optionally include related Booking information if needed
                },
            });

            if (!status) {
                return res.status(404).json({ error: 'Status not found' });
            }

            return res.status(200).json(status);
        } 
        
        // POST request to edit a status by ID
        else if (method === 'POST') {
            const { id } = req.query; // Using req.query to extract ID from query parameters
            const data = await req.body;

            // Validate required fields for status
            const { nama } = data;
            if (!nama) {
                return res.status(400).json({ error: 'Field "nama" is required' });
            }

            // Update the status by ID
            const updatedStatus = await prisma.status.update({
                where: { id: Number(id) }, // Convert id to number if necessary
                data: { nama },
            });

            return res.status(200).json(updatedStatus);
        } 
        
        // Method not allowed
        else {
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error handling request:', error);
        
        // Check for Prisma error code for "Record not found"
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Status not found' });
        }

        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}