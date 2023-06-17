import { Component } from "react";

type props = {
    seletorView: Function
    tema: string
}

export default class FormularioAlteraPet extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome do pet" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo do pet" />
                        </div>
                    </form>
                </div> <br />
                <div className="text-center">
                    <button className="btn btn-outline-secondary" type="button" onClick={(x) => this.props.seletorView('Pets', x)} >Editar pet</button>
                    <button type="button" className="btn btn-secondary" onClick={(x) => this.props.seletorView('Pets', x)} >Deletar pet</button>
                </div>
            </div>
        )
    }
}