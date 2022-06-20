import AddMedicine from './../../core/add-medicine';
import MedicineRepository from './../../core/medicine-repository';
import firebase from './../config';

export default class MedicineCollection implements MedicineRepository{

    #converter = {
        toFirestore(addMedicines: AddMedicine){
            return{
                name: addMedicines.name,
                dosage: addMedicines.dosage,
                daysToTake: addMedicines.daysToTake,
            }
        },

        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options:firebase.firestore.SnapshotOptions): AddMedicine{
            const data = snapshot.data(options)
            return new AddMedicine(snapshot?.id, data.name, data.dosage, data.daysToTake)
        }
    }

   async save(addMedicines: AddMedicine): Promise<AddMedicine>{
        if(addMedicines?.id){
           await this.collection().doc(addMedicines.id).set(addMedicines)
           return addMedicines
        } else {
          const docRef = await this.collection().add(addMedicines)
          const doc = await docRef.get()
          return doc.data()
        }
    }

   async delete(addMedicines: AddMedicine): Promise<void>{
        return this.collection().doc(addMedicines.id).delete()
    }

   async getAll(): Promise<AddMedicine[]>{
        const query = await this.collection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private collection(){
        return firebase.firestore().collection('medicines').withConverter(this.#converter)
    }

}