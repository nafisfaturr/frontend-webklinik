
import CardTable from "components/Cards/CardTable";
import Admin from "layouts/Admin.js";

export default function Pasien() {
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

Pasien.layout = Admin;