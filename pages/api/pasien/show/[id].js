// pages/api/pasien.js
import prisma from "lib/prisma";

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Main handler for GET and POST requests
export default async function handler(req, res) {
    const { method } = req;

    // Set CORS headers for all responses
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'GET') {
        try {
            const { id } = req.query; // Get ID from query parameters

            if (!id) {
                return res.status(400).json({ error: 'ID is required' });
            }

            const pasien = await prisma.pasien.findUnique({
                where: { id: Number(id) }, // Convert id to number if necessary
            });

            if (!pasien) {
                return res.status(404).json({ error: 'Pasien not found' });
            }

            return res.status(200).json(pasien);
        } catch (error) {
            console.error('Error retrieving Pasien:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        } finally {
            await prisma.$disconnect();
        }
    } else if (method === 'POST') {
        try {
            const { id, nama, nomor_telepon, alamat } = req.body; 

            if (!id || !nama || !nomor_telepon || !alamat) {
                return res.status(400).json({ error: 'All fields (id, nama, nomor_telepon, alamat) are required' });
            }

            const pasienExists = await prisma.pasien.findUnique({
                where: { id: id },
            });
        
            if (!pasienExists) {
                return res.status(404).json({ error: 'Patient not found' });
            }
        
            // Update the existing patient record
            const updatedPasien = await prisma.pasien.update({
                where: { id: id },
                data: {
                    nama,
                    nomor_telepon,
                    alamat,
                },
            });
        
            return res.status(200).json(updatedPasien);
        } catch (error) {
            console.error('Error creating Pasien:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        return res.status(405).json({ error: `Method ${method} Not Allowed` });
    }
}