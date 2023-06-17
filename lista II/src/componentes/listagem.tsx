import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class Listagem extends Component<props>{
    render() {
        return (
            <div>
                <div className="text-center">
                    <div className="container-fluid text-center">
                        <h1>Listagens especiais!</h1>
                    </div>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListaTopMaisProduto', x)}
                        >Top 10 clientes que mais consumiram produtos </a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListaTopMaisServiço', x)}
                        >Top 10 clientes que mais consumiram serviços</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListaTopMaisValor', x)}
                        >Top 5 clientes que mais consumiram em valor</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListaTopMenosProduto', x)}
                        >Top 10 clientes que menos consumiram produtos</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListaTopMenosServiço', x)}
                        >Top 10 clientes que menos consumiram serviços</a>
                    </div>
                </div>
            </div>

        )
    }
}
