import prisma from "lib/prisma";

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Main handler function
export default async function handler(req, res) {
    const { method } = req;

    // Handle CORS preflight request
    if (method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    try {
        // Handler for DELETE request to delete a status by ID
        if (method === 'DELETE') {
            const { id } = req.query; // Using req.query to extract ID from query parameters
            
            // Delete the status by ID
            const deletedStatus = await prisma.status.delete({
                where: { id: Number(id) }, // Convert id to number if necessary
            });

            return res.status(200).json({ message: 'Status deleted successfully', deletedStatus });
        } 
        
        // Method not allowed
        else {
            res.setHeader('Allow', ['DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error deleting status:', error);
        
        // Check for Prisma error code for "Record not found"
        if (error.code === 'P2025') { // Prisma error code for "Record not found"
            return res.status(404).json({ error: 'Status not found' });
        }

        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}