/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class ListaProduto extends Component<props>{
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 1</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 2</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 3</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 4</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 5</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 6</a>
                    </div>
                </div> <br />
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={(x) => this.props.seletorView('FormularioCadastroProduto', x)}>
                        Cadastrar produto</button>
                </div>
            </div>
        )
    }
}