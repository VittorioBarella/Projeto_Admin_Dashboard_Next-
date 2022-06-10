import MedicationTable from "../components/medicines/medication-table";
import Layout from "../components/template/layout";
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

  return (
    <Layout title="Health" subTitle="Manage your Health information!">
      <div
        className={`
          flex flex-col w-full
          bg-white text-gray-800 rounded-md
        `}
      >
        <div className="p-6">
          <MedicationTable addMedicines={addMedicines}></MedicationTable>
        </div>
      </div>
    </Layout>
  );
}
