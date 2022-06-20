import { useEffect, useState } from "react";
import AddMedicine from "../../core/add-medicine";
import MedicineRepository from "../../core/medicine-repository";
import MedicineCollection from "../../firebase/db/medicine-collection";
import useTableOrForm from './useTableOrForm';

export default function useMedicines(){
    const repo: MedicineRepository = new MedicineCollection();

    const { tableVisible,showTable,showForm,} = useTableOrForm()

    const [addMedicine, setAddMedicine] = useState<AddMedicine>(
      AddMedicine.empty()
    );
    const [addMedicines, setAddMedicines] = useState<AddMedicine[]>([]);

    useEffect(getAll, []);
  
    function getAll() {
      repo.getAll().then((addMedicines) => {
        setAddMedicines(addMedicines);
        showTable();
      });
    }
  
    function selectedMedicine(addMedicines: AddMedicine) {
      setAddMedicine(addMedicines);
      showForm();
    }
  
    async function medicineExcluded(addMedicines: AddMedicine) {
      await repo.delete(addMedicines);
      getAll();
    }
  
    function newMedicine() {
      setAddMedicine(AddMedicine.empty());
      showForm()
    }
  
    async function saveMedicine(addMedicine: AddMedicine) {
      await repo.save(addMedicine);
      getAll();
    }

    return {
        addMedicine,
        addMedicines,
        newMedicine,
        saveMedicine,
        medicineExcluded,
        selectedMedicine,
        getAll, 
        tableVisible,
        showTable,
    }

}