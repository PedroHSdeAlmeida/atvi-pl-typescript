export default class Servico {
    public nome!: string
    public preco!: number

    public setNome(nome: string): void {
        this.nome = nome;
    }
    public setPreco(preco: number): void {
        this.preco = preco;
    }

}