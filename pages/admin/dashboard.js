import React from "react";

// layout for page

import Admin from "layouts/Admin.js";
import CardTable from "components/Cards/CardTable";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
