import React, { useState } from "react";

// layout for page
import Admin from "layouts/Admin.js";

export default function StatusAdd() {
  const [nama, setNama] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nama,
    };

    try {
      const response = await fetch("/api/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Status added successfully!");
        setNama(""); // Reset the nama input field
      } else {
        setMessage("Failed to add status.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while adding status.");
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded light bg-white">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <h3 className="font-semibold text-lg text-blueGray-700">
                Add Status
              </h3>
            </div>
            <div className="block w-full overflow-x-auto p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-blueGray-600 text-sm font-bold mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blueGray-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  >
                    Add Status
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

StatusAdd.layout = Admin;