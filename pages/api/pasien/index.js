// pages/api/patients.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const pasienList = await prisma.pasien.findMany();
            res.status(200).json(pasienList);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
        } finally {
            await prisma.$disconnect(); // Ensures the database connection is closed
        }
    } else if (req.method === 'POST') {
        try {
            const data = await req.json();

            const { nama, nomor_telepon, alamat } = data; // Fields for patient creation
            if (!nama || !nomor_telepon || !alamat) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            const newPasien = await prisma.pasien.create({
                data: {
                    nama,
                    nomor_telepon,
                    alamat,
                },
            });

            return res.status(201).json(newPasien);
        } catch (error) {
            console.error('Error creating Pasien:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}