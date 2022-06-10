import AddMedicine from "./../../core/add-medicine";
interface TableProps {
  addMedicines: AddMedicine[];
}
export default function MedicationTable(props: TableProps) {
  function renderHeader() {
    return (
      <tr>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          #
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          Euthyrox
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          Monday
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          Tuesday
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          Wednesday
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          Thursday
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          Friday
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          Saturday
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        >
          Sunday
        </th>
        <th
          scope="col"
          className=" font-medium text-gray-900 px-6 py-4 border-r"
        >
          Actions
        </th>
      </tr>
    );
  }

  function renderData() {
    return props.addMedicines?.map((AddMedicine, i) => {
      return (
        <tr key={AddMedicine.id}>
          <td>{AddMedicine.id}</td>
          <td>{AddMedicine.name}</td>
          <td>{AddMedicine.dosage}</td>
          <td>{AddMedicine.dayToTake}</td>
        </tr>
      );
    });
  }

  return (
    <table>
      <thead>{renderHeader()}</thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
