import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class FormularioAlteraProduto extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome do produto" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Preço do produto" />
                        </div>
                    </form>
                </div> <br />
                <div className="text-center">
                    <button className="btn btn-outline-secondary" type="button" onClick={(x) => this.props.seletorView('Produtos', x)} >Editar produto</button>
                    <button type="button" className="btn btn-secondary" onClick={(x) => this.props.seletorView('Produtos', x)} >Deletar produto</button>
                </div>
            </div>
        )
    }
}