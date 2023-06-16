import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`\nNome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);

            //telefones

            console.log(`Telefones: `)
            if (cliente.getTelefones.length === 0) {
                console.log (`Não possui telefones cadastrados`)
            }
            cliente.getTelefones.forEach(telefone => {
                console.log(`ddd:` + telefone.getDdd)
                console.log(`ddd:` + telefone.getNumero)
            })

            //pets

            console.log(`\nPets do cliente:`);

            if (cliente.getPets.length === 0) {
                console.log (`\nNão possui pets cadastrados`)
            }
            cliente.getPets.forEach(pet => {
                console.log(`\nId do pet: ` + pet.getId)
                console.log(` Nome: ` + pet.getNome);
                console.log(` Tipo: ` + pet.getTipo);
                console.log(` Raça: ` + pet.getRaca);
                console.log(` Sexo: ` + pet.getSexo);
            });

            //console.log(`numero de pets do cliente: ` + cliente.getPets.length)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
