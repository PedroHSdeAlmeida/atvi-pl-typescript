export default class Pet {
    private static contadorInstancias: number = 0;
    public idPet: number
    private nome: string
    private tipo: string
    private raca: string
    private sexo: string
  

    constructor(nome: string, raca: string, sexo: string, tipo: string) {
        Pet.contadorInstancias++;
        this.idPet = Pet.contadorInstancias;
        this.nome = nome
        this.raca = raca
        this.sexo = sexo
        this.tipo = tipo
    }

    public get getId() {
        return this.idPet
    }
    public get getNome() {
        return this.nome
    }
    public get getRaca() {
        return this.raca
    }
    public get getSexo() {
        return this.sexo
    }
    public get getTipo() {
        return this.tipo
    }
    public setNome(nome: string) { 
        this.nome = nome 
    }
    public setRaca(raca: string) { 
        this.raca = raca 
    }
    public setSexo(sexo: string) { 
        this.sexo = sexo 
    }
    public setTipo(tipo: string) { 
        this.tipo = tipo 
    }


}