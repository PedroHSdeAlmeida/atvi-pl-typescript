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
                  console.log(`Deseja atualizar as informações do cliente ${cliente.nome}:`);
                  console.log(`1 - Atualizar Nome`);
                  console.log(`2 - Atualizar Nome Social`);
                  console.log(`3 - Sair`);
  
                  let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
  
                  switch (opcao) {
                      case 1:
                          let novoNome = this.entrada.receberTexto(`Informe o novo nome: `);
                          cliente.setNome(novoNome);
                          console.log(`Nome atualizado com sucesso.`);
                          break;
  
                      case 2:
                          let novoNomeSocial = this.entrada.receberTexto(`Informe o novo nome social: `);
                          cliente.setNomeSocial(novoNomeSocial);
                          console.log(`Nome social atualizado com sucesso.`);
                          break;
                          
                      case 3:
                          execucao = false;
                          console.log(`Operação de atualização finalizada.`);
                          break;
  
                      default:
                          console.log(`Opção inválida.`);
                          break;
                  }
              }
            
          } else {
              console.log(`Cliente com CPF ${cpf} não encontrado.`);
          }
      }
}