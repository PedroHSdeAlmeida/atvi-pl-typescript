import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do produto"  />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Preço do produto" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={(x) => this.props.seletorView('Produtos', x)} >Cadastrar produto</button>
                    </div>
                </form>
            </div>
        )
    }
}