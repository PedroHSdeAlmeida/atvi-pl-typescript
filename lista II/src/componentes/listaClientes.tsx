/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class ListaCliente extends Component<props>{
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="list-group">
                        <a onClick={(x) => this.props.seletorView('FormularioAlteraCliente', x)}
                            className="list-group-item list-group-item-action">Cliente 1</a>
                        <a onClick={(x) => this.props.seletorView('FormularioAlteraCliente', x)}
                            className="list-group-item list-group-item-action">Cliente 2</a>
                        <a onClick={(x) => this.props.seletorView('FormularioAlteraCliente', x)}
                            className="list-group-item list-group-item-action">Cliente 3</a>
                        <a onClick={(x) => this.props.seletorView('FormularioAlteraCliente', x)}
                            className="list-group-item list-group-item-action">Cliente 4</a>
                        <a onClick={(x) => this.props.seletorView('FormularioAlteraCliente', x)}
                            className="list-group-item list-group-item-action">Cliente 5</a>
                        <a onClick={(x) => this.props.seletorView('FormularioAlteraCliente', x)}
                            className="list-group-item list-group-item-action">Cliente 6</a>
                    </div>
                </div> <br />
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={(x) => this.props.seletorView('FormularioCadastroCliente', x)}>
                        Cadastrar cliente</button>
                </div>
            </div>
        )
    }
}