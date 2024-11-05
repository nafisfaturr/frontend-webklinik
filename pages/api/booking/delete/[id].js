import prisma from "lib/prisma";

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Main handler function
export default async function handler(req, res) {
    const { method } = req;

    // Handle CORS preflight request
    if (method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    // Ensure only POST requests are processed
    if (method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }

    const { id } = req.query; // Assuming the ID is passed as a query parameter

    try {
        // Delete the booking by ID
        const deletedBooking = await prisma.booking.delete({
            where: { id: Number(id) }, // Convert id to number if necessary
        });

        return res.status(200).json({
            message: 'Booking deleted successfully',
            deletedBooking,
        });
    } catch (error) {
        console.error('Error deleting booking:', error);
        
        if (error.code === 'P2025') { // Prisma error code for "Record not found"
            return res.status(404).json({ error: 'Booking not found' });
        }

        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}