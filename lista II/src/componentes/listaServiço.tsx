/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class ListaServico extends Component<props>{
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraServico', x)}
                        >Serviço 1</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraServico', x)}
                        >Serviço 2</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraServico', x)}
                        >Serviço 3</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraServico', x)}
                        >Serviço 4</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraServico', x)}
                        >Serviço 5</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraServico', x)}
                        >Serviço 6</a>
                    </div>
                </div> <br />
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={(x) => this.props.seletorView('FormularioCadastroServico', x)}>
                        Cadastrar serviço</button>
                </div>

            </div>
        )
    }
}