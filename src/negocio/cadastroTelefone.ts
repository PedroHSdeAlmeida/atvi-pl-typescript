import Entrada from "../io/entrada";
import Telefone from "../modelo/telefone";

export default class CadastroTelefone {
  private entrada: Entrada;

  constructor() {
    this.entrada = new Entrada();
  }

  public cadastraTelefone(telefones: Telefone[]): Telefone {
    let dddNumero = this.entrada.receberTexto(`Por favor informe o número do seu telefone com o DDD, neste formato "12-999999999": `);
    let partesTelefone = dddNumero.split('-');
    let ddd = partesTelefone[0];
    let numero = partesTelefone[1];

    let telefone = new Telefone(ddd, numero);
    telefones.push(telefone);

    return telefone;
  }
}
