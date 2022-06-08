import AddMedicine from "./../../core/add-medicine";
import { IconEdit, IconTrash } from "./../../icons/index";

interface MedicationTableProps {
  medicines: AddMedicine[];
}

export default function MedicationTable(props) {
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
    return props.remedys?.map((remedy, i) => {
      return (
        <tr
          className={`${i % 2 === 0 ? "bg-blue-200" : "bg-blue-100"}`}
          key={`$(remedy.id)`}
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
            {remedy.id}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
            {remedy.name}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
            {remedy.dosage}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
            {remedy.dayToTake}
          </td>
          {renderActions(remedy)}
        </tr>
      );
    });
  }

  function renderActions(remedy: AddMedicine) {
    return (
      <>
        <td className="flex">
          <button
            className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-blue-50
        `}
          >
            {IconEdit}
          </button>
          <button
            className={`
          flex justify-center items-center
          text-red-500 rounded-full p-2 m-1
          hover:bg-blue-50
        `}
          >
            {IconTrash}
          </button>
        </td>
      </>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden"></div>
          <table className="min-w-full border text-center">
            <thead className="border-b">{renderHeader()}</thead>
            <tbody>{renderData()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
