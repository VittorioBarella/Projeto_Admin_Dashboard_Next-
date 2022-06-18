import { IconEdit, IconTrash } from "../../icons";
import AddMedicine from "./../../core/add-medicine";

interface TableProps {
  addMedicines: AddMedicine[];
  selectedMedicine?: (addMedicines: AddMedicine) => void;
  medicineExcluded?: (addMedicines: AddMedicine) => void;
}
export default function MedicationTable(props: TableProps) {
  const showActions = props.medicineExcluded || props.selectedMedicine;

  function renderHeader() {
    return (
      <>
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
            Medicine
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
          >
            Dosage
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
          >
            Days To Take
          </th>
          {showActions ? (
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
            >
              Actions
            </th>
          ) : (
            false
          )}
        </tr>
      </>
    );
  }

  function renderData() {
    return props.addMedicines?.map((AddMedicine, i) => {
      return (
        <tr
          key={AddMedicine.id}
          className={`${i % 2 === 0 ? "bg-blue-200" : "bg-blue-100"}`}
        >
          <td scope="row" className="text-center">
            {AddMedicine.id}
          </td>
          <td scope="row" className="text-center">
            {AddMedicine.name}
          </td>
          <td scope="row" className="text-center">
            {AddMedicine.dosage}
          </td>
          <td scope="row" className="text-center">
            {AddMedicine.dayToTake}
          </td>
          {showActions ? renderActions(AddMedicine) : false}
        </tr>
      );
    });
  }

  function renderActions(addMedicines: AddMedicine) {
    return (
      <td className="flex justify-center">
        {props.selectedMedicine ? (
          <button
            onClick={() => props.selectedMedicine?.(addMedicines)}
            className={` 
              flex justify-center 
              text-green-600  rounded-full p-2 m-1
              hover:bg-blue-50
          `}
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.medicineExcluded ? (
          <button
            onClick={() => props.medicineExcluded?.(addMedicines)}
            className={` 
          flex justify-center
          text-red-500  rounded-full p-2 m-1
          hover:bg-blue-50
        `}
          >
            {IconTrash}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full">
      <thead>{renderHeader()}</thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
