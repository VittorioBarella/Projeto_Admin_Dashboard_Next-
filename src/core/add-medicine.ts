export default class AddMedicine {
     #id:string
     #name: string
     #dosage: number
     #dayToTake: string
    
    constructor(id: string = null, name: string, dosage: number, dayToTake: string = '' ){
        this.#name = name
        this.#dosage = dosage
        this.#dayToTake = dayToTake
        this.#id = id
    }

    static empty(){
        return new AddMedicine('','', 0)
    }

    get id(){
        return this.#id
    }
    get name(){
        return this.#name
    }
    get dosage(){
        return this.#dosage
    }
    get dayToTake(){
        return this.#dayToTake
    }

}