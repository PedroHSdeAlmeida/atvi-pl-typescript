import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class FormularioAlteraCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome do cliente" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome social do cliente" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Telefone do cliente" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                            <input type="text" className="form-control" placeholder="E-mail do cliente" />
                        </div>
                    </form>
                </div> <br />
                <div className="text-center">
                    <button className="btn btn-outline-secondary" type="button" onClick={(x) => this.props.seletorView('Clientes', x)} >Editar cliente</button>
                    <button type="button" className="btn btn-secondary" onClick={(x) => this.props.seletorView('Clientes', x)} >Deletar cliente</button>
                </div>
            </div>
        )
    }
}