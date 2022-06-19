import { useState } from "react";
import Button from "../components/button/button";
import MedicationForm from "../components/forms/medication-form";
import MedicationTable from "../components/medicines/medication-table";
import Layout from "../components/template/Layout";
import AddMedicine from "../core/add-medicine";

export default function Health() {
  const addMedicines = [
    new AddMedicine("1", "Euthyrox", 150, "Monday"),
    new AddMedicine("2", "Euthyrox", 175, "Tuesday"),
    new AddMedicine("3", "Euthyrox", 150, "Wednesday"),
    new AddMedicine("4", "Euthyrox", 175, "Thursday"),
    new AddMedicine("5", "Euthyrox", 150, "Friday"),
    new AddMedicine("6", "Euthyrox", 175, "Saturday"),
    new AddMedicine("7", "Euthyrox", 175, "Sunday"),
  ];

  function selectedMedicine(AddMedicines: AddMedicine) {
    console.log(AddMedicines.name);
  }
  function medicineExcluded(AddMedicines: AddMedicine) {
    console.log(`Deleted... ${AddMedicines.name}`);
  }

  const [visible, setVisible] = useState<"table" | "form">("table");

  return (
    <Layout title="Health" subTitle="Manage your Health information!">
      <div
        className={`
          flex flex-col w-full
          bg-white text-gray-800 rounded-md
        `}
      >
        <div className="p-6">
          {visible === "table" ? (
            <>
              <div className="flex justify-end">
                <Button
                  color="blue"
                  className="mb-4"
                  onClick={() => setVisible("form")}
                >
                  New Medicine
                </Button>
              </div>
              <MedicationTable
                addMedicines={addMedicines}
                selectedMedicine={selectedMedicine}
                medicineExcluded={medicineExcluded}
              />
            </>
          ) : (
            <MedicationForm
              addMecines={addMedicines[0]}
              canceled={() => setVisible("table")}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
