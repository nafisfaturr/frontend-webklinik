import prisma from "lib/prisma";

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Main handler function
export default async function handler(req, res) {
    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    try {
        if (req.method === 'GET') {
            // Handler for GET request to retrieve all jadwal
            const jadwalList = await prisma.jadwal.findMany();
            res.status(200).json(jadwalList);
        } else if (req.method === 'POST') {
           // Handler for POST request to insert a new jadwal
            const data = req.body; // Assuming body-parser middleware is used

            // Validate required fields
            const { tanggal, jam_mulai, jam_selesai } = data;
            if (!tanggal || !jam_mulai || !jam_selesai) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Convert tanggal to a Date object
            const date = new Date(tanggal);
            if (isNaN(date.getTime())) {
                return res.status(400).json({ error: 'Invalid date format for tanggal' });
            }

            // Combine tanggal with jam_mulai and jam_selesai times
            const startTime = new Date(`${tanggal}T${jam_mulai}:00`);
            const endTime = new Date(`${tanggal}T${jam_selesai}:00`);

            if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
                return res.status(400).json({ error: 'Invalid time format for jam_mulai or jam_selesai' });
            }

            // Create a new jadwal entry
            const newJadwal = await prisma.jadwal.create({
                data: {
                    tanggal: date,
                    jam_mulai: startTime,
                    jam_selesai: endTime,
                    // Add any other necessary fields here
                },
            });

            res.status(201).json(newJadwal);
        } else {
            // Handle unsupported request methods
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}