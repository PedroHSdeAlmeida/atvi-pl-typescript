/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class ListaTopMenosServiço extends Component<props>{
    render() {
        return (
            <div>
                <div className="container-fluid text-center">
                    <h1>Top 10 clientes que menos consumiram serviços!</h1>
                </div>

                <div className="container-fluid">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 1</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 2</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 3</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 4</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 5</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 6</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 7</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 8</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 9</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => this.props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 10</a>

                    </div>
                </div> <br />
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={(x) => this.props.seletorView('Listagem', x)}>
                        Voltar para a listagem</button>
                </div>

            </div>
        )
    }
}