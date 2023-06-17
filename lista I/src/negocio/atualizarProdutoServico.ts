import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Atualizar from "./atualizar";

export default class atualizarProdutoServico extends Atualizar {
    private entrada: Entrada;
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada();
    }

    public atualiza(): void {
        let execucao = true
        while (execucao) {
            console.log(`1 - Atualizar/Deletar produto`);
            console.log(`2 - Atualizar/Deletar serviço`);
            console.log(`3 - Sair`);

            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);

            switch (opcao) {
                case 1:
                    console.log(`\nLista de todos os produtos:`);
                    this.produtos.forEach(produto => {
                        console.log(`Nome: ` + produto.nome);
                        console.log(`Valor: ` + produto.preco);
                        console.log(`--------------------------------------`);
                    });

                    let n = this.entrada.receberTexto(`Digite o nome do produto que deseja editar/excluir: `)
                    let escolhaProduto = this.produtos.find(produto => produto.nome === n);
                    if (escolhaProduto) {
                        console.log(`Opções de atualização:`)
                        console.log(`1. Nome`)
                        console.log(`2. Preço`)
                        console.log(`3. Excluir`)
                        console.log(`4. Sair`)

                        let entrada = new Entrada()
                        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                        switch (opcao) {
                            case 1:
                                let novoNome = this.entrada.receberTexto(`Informe o novo nome do produto: `)
                                escolhaProduto.setNome(novoNome)
                                console.log(`Nome do produto atualizado `)
                                break;

                            case 2:
                                let novaPreco = this.entrada.receberNumero(`Informe o novo preço do produto: `)
                                escolhaProduto.setPreco(novaPreco)
                                console.log(`Preço do produto atualizado `)
                                break;

                            case 3:
                                const pegaPosicaoProduto = this.produtos.findIndex(
                                    (produto) => produto.nome === escolhaProduto?.nome
                                );
                                this.produtos.splice(pegaPosicaoProduto, 1)
                                console.log(`Produto removido`)

                            case 4:
                                execucao = false;
                                break;            

                        }
                    }
                    else {
                        console.log(`Produto não encontrado`)
                        break
                    }

                case 2:
                    console.log(`\nLista de todos os serviços:`);
                    this.servicos.forEach(servico => {
                        console.log(`Nome: ` + servico.nome);
                        console.log(`Valor: ` + servico.preco);
                        console.log(`--------------------------------------`);
                    });

                    let ns = this.entrada.receberTexto(`Digite o nome do serviço que deseja editar/excluir: `)
                    let escolhaServico = this.servicos.find(servico => servico.nome === ns);
                    if (escolhaServico) {
                        console.log(`Opções de atualização:`)
                        console.log(`1. Nome`)
                        console.log(`2. Preço`)
                        console.log(`3. Excluir`)
                        console.log(`4. Sair`)

                        let entrada = new Entrada()
                        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                        switch (opcao) {
                            case 1:
                                let novoNomeS = this.entrada.receberTexto(`Informe o novo nome do servico: `)
                                escolhaServico.setNome(novoNomeS)
                                console.log(`Nome do serviço atualizado `)
                                break;

                            case 2:
                                let novaPrecoS = this.entrada.receberNumero(`Informe o novo preço do serviço: `)
                                escolhaServico.setPreco(novaPrecoS)
                                console.log(`Preço do serviço atualizado `)
                                break;

                            case 3:
                                const pegaPosicaoServico = this.servicos.findIndex(
                                    (servico) => servico.nome === escolhaServico?.nome
                                );
                                this.servicos.splice(pegaPosicaoServico, 1)
                                console.log(`Serviço removido`)

                            case 4:
                                execucao = false;
                                break;            

                        }
                    }
                    else {
                        console.log(`Serviço não encontrado`)
                        break
                    }

                case 3:
                    execucao = false;
                    break;

            }
        }
    }
}

