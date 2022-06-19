import { useState } from "react";
import Button from "../button/button";
import AddMedicine from "./../../core/add-medicine";
import Input from "./../input/input";
interface MedicationFormProps {
  addMecines: AddMedicine;
  medicineChanged?: (AddMedicines: AddMedicine) => void;
  canceled?: () => void;
}

export default function MedicationForm(props: MedicationFormProps) {
  const id = props.addMecines.id;
  const [name, setName] = useState(props.addMecines?.name ?? "");
  const [dosage, setDosage] = useState(props.addMecines?.dosage ?? 0);
  const [daysToTake, setDaysToTake] = useState(
    props.addMecines?.daysToTake ?? ""
  );

  return (
    <div>
      {id ? <Input readOnly text="Id" value={id} className="mb-5" /> : false}
      <Input
        text="Medicine Name"
        value={name}
        className="mb-5"
        onChangeValue={setName}
      />
      <Input
        text="Dosage"
        type="number"
        value={dosage}
        className="mb-5"
        onChangeValue={setDosage}
      />
      <Input
        text="Days To Take"
        value={daysToTake}
        className="mb-5"
        onChangeValue={setDaysToTake}
      />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() =>
            props.medicineChanged?.(
              new AddMedicine(id, name, +dosage, daysToTake)
            )
          }
        >
          {id ? "Change" : "Save"}
        </Button>
        <Button onClick={props.canceled}> Cancel </Button>
      </div>
    </div>
  );
}
