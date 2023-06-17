import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";


export default class AtualizaCliente extends Atualizar{
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    
    public atualiza(cpf: string): void {
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
          if (cliente) {
              let execucao = true;
  
              while (execucao) {
                  console.log(`\nDeseja atualizar as informações do cliente ${cliente.nome}:`);
                  console.log(`1 - Atualizar Nome`);
                  console.log(`2 - Atualizar Nome Social`);
                  console.log(`3 - Atualizar telefone`);
                  console.log(`4 - Sair`);
  
                  let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
  
                  switch (opcao) {
                      case 1:
                          let novoNome = this.entrada.receberTexto(`Informe o novo nome: `);
                          cliente.setNome(novoNome);
                          console.log(`\nNome atualizado com sucesso.`);
                          break;
  
                      case 2:
                          let novoNomeSocial = this.entrada.receberTexto(`Informe o novo nome social: `);
                          cliente.setNomeSocial(novoNomeSocial);
                          console.log(`\nNome social atualizado com sucesso.`);
                          break;

                      case 3:
                        console.log(`\nTelefones de ${cliente.nome}: `)
                        if (cliente.getTelefones.length === 0) {
                            console.log (`\nNão possui telefones cadastrados`)
                            break
                        }
                        cliente.getTelefones.forEach(telefone => {
                            console.log(`ddd:` + telefone.getDdd)
                            console.log(`numero:` + telefone.getNumero)
                        })
                        let num = this.entrada.receberTexto(`Digite apenas o numero do telefone que será editado (sem o ddd): `)
                        let setTelefone = cliente.getTelefones.find(telefone => telefone.getNumero === num);
                        if (setTelefone) {
                            let novoNumero = this.entrada.receberTexto(`Informe o novo número do telefone, neste formato "12-999999999": `)
                            let partesTelefone = novoNumero.split('-')
                            let ddd = new String(partesTelefone[0].valueOf()).valueOf()
                            let numero = new String(partesTelefone[1].valueOf()).valueOf()
                            setTelefone.setNumero(ddd, numero)
                            console.log('Telefone atualizado com sucesso')
                            break
                          }
                        else {
                            console.log(`Telefone não encontrado`)
                            break
                        }
                      case 4:
                          execucao = false;
                          console.log(`\nSaindo...`);
                          break;
  
                      default:
                          console.log(`Opção inválida.`);
                          break;
                  }
              }
            
          } else {
              console.log(`Não existe cliente com o CPF ${cpf} cadastrado.`);
          }
      }
}