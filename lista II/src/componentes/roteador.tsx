import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaPet from "./listaPet";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServiço";
import ListaCliente from "./listaClientes";
import FormularioAlteraCliente from "./formularioAlteraCliente";
import FormularioAlteraPet from "./formularioAlteraPet";
import FormularioAlteraProduto from "./formularioAlteraProduto";
import FormularioAlteraServico from "./formularioAlteraServico";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Home from "./Home";
import Listagem from "./listagem";
import ListaTopMaisProduto from "./listaTopMaisProduto";
import ListaTopMenosProduto from "./listaTopMenosProduto";
import ListaTopMaisServiço from "./listaTopMaisServiços";
import ListaTopMenosServiço from "./listaTopMenosServiços";
import ListaTopMaisValor from "./listaTopMaisValor";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Home','Clientes', 'Produtos', 'Serviços','Pets', 'Listagem']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Listagem') {
            return (
                <>
                    {barraNavegacao}
                    <Listagem tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListaTopMaisProduto') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMaisProduto tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListaTopMenosProduto') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMenosProduto tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListaTopMaisServiço') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMaisServiço tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListaTopMenosServiço') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMenosServiço tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListaTopMaisValor') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMaisValor tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }

        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'FormularioCadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'FormularioCadastroPet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'FormularioCadastroServico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'FormularioCadastroProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'FormularioAlteraCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAlteraCliente tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'FormularioAlteraPet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAlteraPet tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'FormularioAlteraProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAlteraProduto tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'FormularioAlteraServico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAlteraServico tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        }

         else {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="#e3f2fd" seletorView={this.selecionarView}/>
                </>
            )
        }
    }
}