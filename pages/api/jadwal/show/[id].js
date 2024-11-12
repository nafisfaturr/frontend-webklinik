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
            // Handler for GET request to find a jadwal by ID
            const { id } = req.query; // Assuming the ID is passed as a URL query parameter
            
            // Find a jadwal by ID
            const jadwal = await prisma.jadwal.findUnique({
                where: { id: Number(id) }, // Convert id to number if necessary
            });

            if (!jadwal) {
                return res.status(404).json({ error: 'Jadwal not found' });
            }

            return res.status(200).json(jadwal);
        } else if (req.method === 'POST') {
            // Handler for POST request to edit a jadwal by ID
            const { id } = req.query; // Assuming the ID is passed as a URL query parameter
            const data = req.body; // Assuming body-parser middleware is used

            // Validate required fields
            const { tanggal, jam_mulai, jam_selesai } = data; // Example fields for Jadwal
            if (!tanggal || !jam_mulai || !jam_selesai) {
            return res.status(400).json({ error: 'All fields are required' });
            }

            // Combine tanggal with jam_mulai and jam_selesai to form valid Date objects
            const startDateTime = new Date(`${tanggal}T${jam_mulai}`);
            const endDateTime = new Date(`${tanggal}T${jam_selesai}`);

            // Check if dates are valid
            if (isNaN(startDateTime) || isNaN(endDateTime)) {
            return res.status(400).json({ error: 'Invalid date or time format' });
            }

            // Update the jadwal by ID
            const updatedJadwal = await prisma.jadwal.update({
            where: { id: Number(id) }, // Convert id to number if necessary
            data: {
                tanggal: new Date(tanggal), // Convert tanggal to Date object
                jam_mulai: startDateTime,   // Use combined Date for jam_mulai
                jam_selesai: endDateTime,   // Use combined Date for jam_selesai
                // Add any other fields that can be updated
            },
            });

            return res.status(200).json(updatedJadwal);
        } else {
            // Handle unsupported request methods
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error processing request:', error);
        
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}