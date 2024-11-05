import prisma from "lib/prisma";

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Main handler function
export default async function handler(req, res) {
    // Handle CORS preflight request
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    try {
        if (req.method === 'GET') {
            // Handler for GET request to retrieve all bookings
            const bookingList = await prisma.booking.findMany({
                include: {
                    jadwal: true,   // Include related Jadwal information
                    pasien: true,   // Include related Pasien information
                    status: true,   // Include related Status information
                },
            });

            return res.status(200).json(bookingList);
        } else if (req.method === 'POST') {
            // Handler for POST request to insert a new booking
            const data = req.body; // Assuming body-parser middleware is used
            
            // Validate required fields and convert to integers
            const { id_jadwal, id_pasien, id_status } = data;
            if (!id_jadwal || !id_pasien || !id_status) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Convert values to integers
            const bookingData = {
                id_jadwal: parseInt(id_jadwal, 10),
                id_pasien: parseInt(id_pasien, 10),
                id_status: parseInt(id_status, 10),
            };

            // Check if the conversion was successful
            if (isNaN(bookingData.id_jadwal) || isNaN(bookingData.id_pasien) || isNaN(bookingData.id_status)) {
                return res.status(400).json({ error: 'Invalid data types for booking fields' });
            }

            // Create a new booking
            const newBooking = await prisma.booking.create({
                data: {
                    id_jadwal: bookingData.id_jadwal,
                    id_pasien: bookingData.id_pasien,
                    id_status: bookingData.id_status,
                },
            });

            return res.status(201).json(newBooking);
        } else {
            // Handle unsupported request methods
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error processing request:', error);
        
        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}