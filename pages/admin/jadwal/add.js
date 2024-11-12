import React, { useState } from "react";

// layout for page
import Admin from "layouts/Admin.js";

export default function JadwalAdd() {
  const [tanggal, setTanggal] = useState("");
  const [jamMulai, setJamMulai] = useState("");
  const [jamSelesai, setJamSelesai] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      tanggal,
      jam_mulai: jamMulai,
      jam_selesai: jamSelesai,
    };

    try {
      const response = await fetch("/api/jadwal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Jadwal added successfully!");
        setTanggal("");
        setJamMulai("");
        setJamSelesai("");
      } else {
        setMessage("Failed to add jadwal.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while adding jadwal.");
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded light bg-white">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <h3 className="font-semibold text-lg text-blueGray-700">
                Add Jadwal
              </h3>
            </div>
            <div className="block w-full overflow-x-auto p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-blueGray-600 text-sm font-bold mb-2">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-blueGray-600 text-sm font-bold mb-2">
                    Jam Mulai
                  </label>
                  <input
                    type="time"
                    value={jamMulai}
                    onChange={(e) => setJamMulai(e.target.value)}
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-blueGray-600 text-sm font-bold mb-2">
                    Jam Selesai
                  </label>
                  <input
                    type="time"
                    value={jamSelesai}
                    onChange={(e) => setJamSelesai(e.target.value)}
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blueGray-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  >
                    Add Jadwal
                  </button>
                </div>
                {message && (
                  <p className="text-blueGray-700 text-sm font-semibold mt-4">
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

JadwalAdd.layout = Admin;