import MedicationTable from "../components/medicines/medication-table";
import Layout from "../components/template/layout";
import AddMedicine from "../core/add-medicine";

export default function Health() {
  const remedys = [
    new AddMedicine("1", 150, "Need"),
    new AddMedicine("2", 175, "Need"),
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
          <MedicationTable remedys={remedys} />
        </div>
      </div>
    </Layout>
  );
}
