import prisma from "lib/prisma";

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Handler for DELETE request to delete a pasien by ID
export async function deletePasien(req, res) {
    // Handle CORS preflight request
    if (req.method === 'OPTIONS') {
        res.writeHead(204, corsHeaders);
        return res.end();
    }

    try {
        const { id } = req.params; // Assuming the ID is passed as a URL parameter

        const deletedPasien = await prisma.pasien.delete({
            where: { id: Number(id) }, // Convert id to number if necessary
        });

        res.set(corsHeaders);
        return res.status(200).json({ message: 'Pasien deleted successfully', deletedPasien });
    } catch (error) {
        console.error('Error deleting Pasien:', error);

        if (error.code === 'P2025') {
            res.set(corsHeaders);
            return res.status(404).json({ error: 'Pasien not found' });
        }

        res.set(corsHeaders);
        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}