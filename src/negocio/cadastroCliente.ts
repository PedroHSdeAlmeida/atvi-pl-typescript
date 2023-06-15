    import Entrada from "../io/entrada";
    import Cliente from "../modelo/cliente";
    import CPF from "../modelo/cpf";
    import Cadastro from "./cadastro";
    import VerificadorDuplicidadeCPF from "./trataCpf";
    import Pet from "../modelo/pet";
    import CadastroPet from "./cadastroPet";

    export default class CadastroCliente extends Cadastro {
        private clientes: Array<Cliente>;
        private entrada: Entrada;
        private verificadorCPF: VerificadorDuplicidadeCPF;
        
        constructor(clientes: Array<Cliente>) {
            super();
            this.clientes = clientes;
            this.entrada = new Entrada();
            this.verificadorCPF = new VerificadorDuplicidadeCPF();
        }
        
        public cadastrar(): void {
            console.log(`\nInício do cadastro do cliente`);
            let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
            let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
            let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/');
            let ano = new Number(partesData[2].valueOf()).valueOf();
            let mes = new Number(partesData[1].valueOf()).valueOf();
            let dia = new Number(partesData[0].valueOf()).valueOf();
            let dataEmissao = new Date(ano, mes, dia);
            let cpf = new CPF(valor, dataEmissao);
            if (this.verificadorCPF.verificaCpf(cpf.getValor, this.clientes)) {
                console.log(`\nCPF já cadastrado. Não é possível cadastrar o cliente.`);
                return ;
                }   

            let cadastroPet = new CadastroPet()
            let pets : Array<Pet> = []
            console.log(`\nDeseja cadastrar um pet? `)
            console.log(`\n1 - Para sim`);
            console.log(`2 - para não`);
            let r = 0
            while (r !== 2) {
                r = this.entrada.receberNumero(`Por favor, digite uma opção: `);
                switch (r) {
                    case 1:
                    cadastroPet.cadastraPet(pets)
                    console.log('deseja cadastrar outro pet?')
                    console.log(`1 - Para sim`);
                    console.log(`2 - para não`);
                    case 2:
                        break
                    default: 
                        console.log(`Operação não entendida :(`)
                }
            }        
            let cliente = new Cliente(nome, nomeSocial, cpf, pets);
            this.clientes.push(cliente);
            console.log(`\nCadastro concluído :)\n`);
        }
    }