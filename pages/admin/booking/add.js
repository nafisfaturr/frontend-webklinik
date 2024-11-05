import React, { useEffect, useState } from 'react';

// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page
import Admin from "layouts/Admin.js";

export default function BookingAdd() {
  const [pasien, setPasien] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const fetchPasien = async () => {
    try {
      const response = await fetch('/api/pasien');
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch pasien:', error);
      setError(error.message);
      return [];
    }
  };

  const fetchJadwal = async () => {
    try {
      const response = await fetch('/api/jadwal');
      if (!response.ok) throw new Error('Network response was not ok');
      const jadwalData = await response.json();
      const formattedJadwal = jadwalData.map(j => {
        const jamMulaiDate = new Date(j.jam_mulai);
        const jamSelesaiDate = new Date(j.jam_selesai);
        const tanggalDate = new Date(j.tanggal);
        const dayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

        return {
          ...j,
          jam_mulai: `${tanggalDate.toLocaleDateString('id-ID', dayOptions)} ${jamMulaiDate.toLocaleTimeString('id-ID', timeOptions)}`,
          jam_selesai: `${tanggalDate.toLocaleDateString('id-ID', dayOptions)} ${jamSelesaiDate.toLocaleTimeString('id-ID', timeOptions)}`,
        };
      });
      return formattedJadwal;
    } catch (error) {
      console.error('Gagal mengambil jadwal:', error);
      setError(error.message);
      return [];
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await fetch('/api/status');
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch status:', error);
      setError(error.message);
      return [];
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const pasienData = await fetchPasien();
      const jadwalData = await fetchJadwal();
      const statusData = await fetchStatus();

      setPasien(pasienData);
      setJadwal(jadwalData);
      setStatus(statusData);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleSave = async () => {
    if (!selectedPatient || !selectedSchedule || !selectedStatus) {
      alert('Please select all fields.');
      return;
    }

    const bookingData = {
      id_pasien: selectedPatient,
      id_jadwal: selectedSchedule,
      id_status: selectedStatus,
    };

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) throw new Error('Failed to save booking');
      const result = await response.json();
      alert('Booking saved successfully!');
      // Optionally reset the form or perform other actions
    } catch (error) {
      console.error('Error saving booking:', error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Booking Form</h6>
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleSave}
                >
                  Simpan
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Booking Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="patient">
                        Pasien
                      </label>
                      <select
                        id="patient"
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setSelectedPatient(e.target.value)}
                      >
                        <option value="">Select Pasien</option>
                        {pasien.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.nama} - {p.nomor_telepon}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="schedule">
                        Jadwal
                      </label>
                      <select
                        id="schedule"
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setSelectedSchedule(e.target.value)}
                      >
                        <option value="">Select Jadwal</option>
                        {jadwal.map((j) => (
                          <option key={j.id} value={j.id}>
                            {j.jam_mulai} - {j.jam_selesai}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="status">
                        Status
                      </label>
                      <select
                        id="status"
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setSelectedStatus(e.target.value)}
                      >
                        <option value="">Select Status</option>
                        {status.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.nama}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

BookingAdd.layout = Admin;