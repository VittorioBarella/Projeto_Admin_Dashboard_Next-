import Button from "../components/button/button";
import MedicineForm from "../components/forms/medicine-form";
import MedicinesTable from "../components/medicines/medicines-table";
import Layout from "../components/template/layout";
import useMedicines from "./../data/hook/use-medicines";

export default function Health() {
  const {
    newMedicine,
    saveMedicine,
    medicineExcluded,
    selectedMedicine,
    addMedicine,
    addMedicines,
    tableVisible,
    showTable,
  } = useMedicines();

  return (
    <Layout title="Health" subTitle="Manage your Health information!">
      <div
        className={`
          flex flex-col w-full
          bg-white text-gray-800 rounded-md
        `}
      >
        <div className="p-6">
          {tableVisible ? (
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
              canceled={showTable}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
