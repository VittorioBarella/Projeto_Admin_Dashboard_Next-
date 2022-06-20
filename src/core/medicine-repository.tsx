import AddMedicine from "./add-medicine";
export default interface MedicineRepository {
  save(addMedicines: AddMedicine): Promise<AddMedicine>;
  delete(addMedicines: AddMedicine): Promise<void>;
  getAll(): Promise<AddMedicine[]>;
}
