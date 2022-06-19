export default class AddMedicine {
     #id:string
     #name: string
     #dosage: number
     #daysToTake: string
    
    constructor(id: string = null, name: string, dosage: number, daysToTake: string){
        this.#id = id
        this.#name = name
        this.#dosage = dosage
        this.#daysToTake = daysToTake 
    }

    static empty(){
        return new AddMedicine('','',0,'')
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
    get daysToTake(){
        return this.#daysToTake
    }

}