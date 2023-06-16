import Entrada from "../io/entrada";
import RG from "../modelo/rg";

export default class CadastroRg {
  private entrada: Entrada;
  
  constructor() {
    this.entrada = new Entrada();
  }

  public cadastraRg(rgs: RG[]): RG {
    console.log(`\nInicio do cadastro de RGs`);

    let valor = this.entrada.receberTexto(`Por favor informe o número do rg: `);
    let data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
    let partesData = data.split('/');
    let ano = +partesData[2];
    let mes = +partesData[1];
    let dia = +partesData[0];
    let dataEmissao = new Date(ano, mes, dia);

    let rg = new RG(valor, dataEmissao);
    rgs.push(rg);
    return rg;
  }
}
