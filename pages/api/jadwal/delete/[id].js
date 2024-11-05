import prisma from "lib/prisma";

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Main handler function
export default async function handler(req, res) {
    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    try {
        if (req.method === 'POST') {
            const { id } = req.body; // Assuming the ID is passed in the request body

            // Check if ID is provided
            if (!id) {
                return res.status(400).json({ error: 'ID is required' });
            }

            // Delete the jadwal by ID
            const deletedJadwal = await prisma.jadwal.delete({
                where: { id: Number(id) }, // Convert id to number if necessary
            });

            res.status(200).json({ message: 'Jadwal deleted successfully', deletedJadwal });
        } else {
            // Handle unsupported request methods
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error deleting jadwal:', error);
        
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Jadwal not found' });
        }

        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}