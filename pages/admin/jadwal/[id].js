import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page
import Admin from "layouts/Admin.js";

export default function JadwalEdit() {
  const router = useRouter();
  const { id } = router.query; // Extract id from router.query
  const [jadwalData, setJadwalData] = useState({
    tanggal: '',
    jam_mulai: '',
    jam_selesai: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJadwalDetails = async () => {
    if (!id) return;
    try {
      const response = await fetch(`/api/jadwal/show/${id}`);
      if (!response.ok) throw new Error('Failed to fetch schedule details');
      const data = await response.json();

      // Format tanggal, jam_mulai, and jam_selesai correctly for input fields
      const formattedTanggal = data.tanggal.split('T')[0]; // Extract YYYY-MM-DD
      const formattedJamMulai = new Date(data.jam_mulai).toISOString().substring(11, 16); // Extract HH:MM
      const formattedJamSelesai = new Date(data.jam_selesai).toISOString().substring(11, 16); // Extract HH:MM

      setJadwalData({
        tanggal: formattedTanggal,
        jam_mulai: formattedJamMulai,
        jam_selesai: formattedJamSelesai,
      });
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch schedule details:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJadwalDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJadwalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/jadwal/show/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jadwalData),
      });

      if (!response.ok) throw new Error('Failed to update schedule details');
      alert('Schedule details updated successfully!');
      router.push('/admin/jadwal');
    } catch (error) {
      console.error('Error updating schedule:', error);
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
                <h6 className="text-blueGray-700 text-xl font-bold">Edit Schedule</h6>
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Schedule Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="tanggal">
                        Tanggal
                      </label>
                      <input
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        value={jadwalData.tanggal}
                        onChange={handleChange}
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="jam_mulai">
                        Jam Mulai
                      </label>
                      <input
                        type="time"
                        id="jam_mulai"
                        name="jam_mulai"
                        value={jadwalData.jam_mulai}
                        onChange={handleChange}
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="jam_selesai">
                        Jam Selesai
                      </label>
                      <input
                        type="time"
                        id="jam_selesai"
                        name="jam_selesai"
                        value={jadwalData.jam_selesai}
                        onChange={handleChange}
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

JadwalEdit.layout = Admin;