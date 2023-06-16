import Entrada from "../io/entrada";
import Pet from "../modelo/pet";

export default class CadastroPet {
  private entrada: Entrada;


  constructor() {
    this.entrada = new Entrada();
  }

  public cadastraPet(pets: Array<Pet>): Pet {
    console.log(`\nInicio do cadastro de pets`);

    let nome = this.entrada.receberTexto('Por favor, Digite o nome do Pet: ');
    let raca = this.entrada.receberTexto('Por favor, Digite a raça do Pet: ');
    let sexo = this.entrada.receberTexto('Por favor, Digite o sexo do Pet: ');
    let tipo = this.entrada.receberTexto('Por favor, Digite o tipo do Pet: ');

    let pet = new Pet(nome, raca, sexo, tipo);
    pets.push(pet);
    return pet;
  }
}
