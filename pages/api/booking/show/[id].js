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

    const { id } = req.query; // Assuming the ID is passed as a query parameter

    try {
        if (method === 'GET') {
            // Handler for GET request to find a booking by ID
            const booking = await prisma.booking.findUnique({
                where: { id: Number(id) }, // Convert id to number if necessary
                include: {
                    jadwal: true,   // Include related Jadwal information
                    pasien: true,   // Include related Pasien information
                    status: true,   // Include related Status information
                },
            });

            if (!booking) {
                return res.status(404).json({ error: 'Booking not found' });
            }

            return res.status(200).json(booking);
        } else if (method === 'POST') {
            // Handler for POST request to edit a booking by ID
            const data = req.body; // Assuming body-parser middleware is used

            // Validate required fields for booking
            const { id_jadwal, id_pasien, id_status } = data;
            if (!id_jadwal || !id_pasien || !id_status) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            const bookingId = Number(id);
            const jadwalId = Number(id_jadwal);
            const pasienId = Number(id_pasien);
            const statusId = Number(id_status);
        
            // Validate integer conversion
            if (isNaN(bookingId) || isNaN(jadwalId) || isNaN(pasienId) || isNaN(statusId)) {
                return res.status(400).json({ error: 'Invalid ID format' });
            }

            // Update the booking by ID
            const updatedBooking = await prisma.booking.update({
                where: { id: Number(id) }, // Convert id to number if necessary
                data: {
                    id_jadwal: jadwalId, // Use the converted jadwal ID
                    id_pasien: pasienId, // Use the converted pasien ID
                    id_status: statusId, 
                },
            });

            return res.status(200).json(updatedBooking);
        } else {
            // Handle unsupported request methods
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error processing request:', error);
        
        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}