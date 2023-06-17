import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class FormularioCadastroPet extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do pet"  />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo do pet"  />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça do pet"  />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Sexo do pet"  />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Dono"  />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={(x) => this.props.seletorView('Pets', x)} >Cadastrar pet</button>
                    </div>
                </form>
            </div>
        )
    }
}