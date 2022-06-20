import { useEffect, useState } from "react";
import Button from "../components/button/button";
import MedicineForm from "../components/forms/medicine-form";
import MedicinesTable from "../components/medicines/medicines-table";
import Layout from "../components/template/Layout";
import AddMedicine from "../core/add-medicine";
import MedicineRepository from "./../core/medicine-repository";
import MedicineCollection from "./../firebase/db/medicine-collection";

export default function Health() {
  const repo: MedicineRepository = new MedicineCollection();

  const [addMedicine, setAddMedicine] = useState<AddMedicine>(
    AddMedicine.empty()
  );
  const [addMedicines, setAddMedicines] = useState<AddMedicine[]>([]);
  const [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((addMedicines) => {
      setAddMedicines(addMedicines);
      setVisible("table");
    });
  }

  function selectedMedicine(addMedicines: AddMedicine) {
    setAddMedicine(addMedicines);
    setVisible("form");
  }

  async function medicineExcluded(addMedicines: AddMedicine) {
    await repo.delete(addMedicines);
    getAll();
  }

  function newMedicine() {
    setAddMedicine(AddMedicine.empty());
    setVisible("form");
  }

  async function saveMedicine(addMedicine: AddMedicine) {
    await repo.save(addMedicine);
    getAll();
  }

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
                <Button color="blue" className="mb-4" onClick={newMedicine}>
                  New Medicine
                </Button>
              </div>
              <MedicinesTable
                addMedicines={addMedicines}
                selectedMedicine={selectedMedicine}
                medicineExcluded={medicineExcluded}
              />
            </>
          ) : (
            <MedicineForm
              addMecines={addMedicine}
              medicineChanged={saveMedicine}
              canceled={() => setVisible("table")}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
