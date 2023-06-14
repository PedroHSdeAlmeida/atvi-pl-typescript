import Cliente from "../modelo/cliente";

export default class VerificadorCpf {
  verificaCpf(cpfDesejado: string, clientes: Array<Cliente>): boolean {
    return clientes.some((cliente) => cliente.cpf.getValor === cpfDesejado);
  }
}
