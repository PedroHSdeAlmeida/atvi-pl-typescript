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
              let execucao = true
  
              while (execucao) {
                  console.log(`\nDeseja atualizar as informações do cliente ${cliente.nome}:`);
                  console.log(`1 - Atualizar Nome`);
                  console.log(`2 - Atualizar Nome Social`);
                  console.log(`3 - Atualizar telefone`);
                  console.log(`4 - Atualizar pet`);
                  console.log(`5 - Sair`);
  
                  let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
  
                  //nome

                  switch (opcao) {
                      case 1:
                          let novoNome = this.entrada.receberTexto(`Informe o novo nome: `);
                          cliente.setNome(novoNome);
                          console.log(`\nNome atualizado com sucesso.`);
                          break;
  
                 //nome social
                      case 2:
                          let novoNomeSocial = this.entrada.receberTexto(`Informe o novo nome social: `);
                          cliente.setNomeSocial(novoNomeSocial);
                          console.log(`\nNome social atualizado com sucesso.`);
                          break;

                 //telefones
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
                 
                 //pets
                 
                      case 4:
                        console.log(`\nPets de ${cliente.nome}: `)
                        if (cliente.getPets.length === 0) {
                            console.log (`\nNão possui pets cadastrados`)
                            break
                        }
                        cliente.getPets.forEach(pet => {
                            console.log(`Id do pet:` + pet.getId)
                            console.log(` Nome: ` + pet.getNome);
                            console.log(` Tipo: ` + pet.getTipo);
                            console.log(` Raça: ` + pet.getRaca);
                            console.log(` Sexo: ` + pet.getSexo);
                            })
                        let id = this.entrada.receberNumero(`Digite o id do pet que deseja editar: `)
                        let setPet = cliente.getPets.find(pet => pet.getId === id);
                        if (setPet) {
                            console.log(`Opções de atualização:`)
                    console.log(`1. Nome`)
                    console.log(`2. Raça`)
                    console.log(`3. Tipo`)
                    console.log(`4. Sexo`)
                    console.log(`5. Sair`)

                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                    switch (opcao) {
                        case 1:
                            let novoNome = this.entrada.receberTexto(`Informe o novo nome do pet: `)
                            setPet.setNome(novoNome)
                            console.log(`Nome do pet atualizado `)
                            break;

                        case 2:
                            let novaRaca = this.entrada.receberTexto(`Informe a nova raça do pet: `)
                            setPet.setRaca(novaRaca)
                            console.log(`Raça do pet atualizada `)
                            break;

                        case 3:
                            let novoTipo = this.entrada.receberTexto(`Informe o novo tipo do pet: `)
                            setPet.setTipo(novoTipo)
                            console.log(`Tipo do pet atualizado `)
                            break;

                        case 4:
                            let novoSexo = this.entrada.receberTexto(`Informe o novo gênero do pet: `)
                            setPet.setSexo(novoSexo)
                            console.log(`Sexo do pet atualizado `)
                            break;
                          }}
                        else {
                            console.log(`Pet não encontrado`)
                            break
                        }
                      case 5:
                          execucao = false;
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