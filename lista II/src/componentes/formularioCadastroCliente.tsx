import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Cpf" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Rg" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Telefone" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Pets" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={(x) => this.props.seletorView('Clientes', x)}
                        >Cadastrar cliente</button>
                    </div>
                </form>
            </div>
        )
    }
}