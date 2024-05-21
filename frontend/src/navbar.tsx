/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './navbar.css'

type Props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            let lista = this.props.botoes.map(valor =>
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <li key={valor}><a onClick={(e) => this.props.seletorView(valor, e)}> {valor} </a></li>
            );
            return lista;
        }
    }

    render() {
        let estilo = `${this.props.tema}`;
        return (
            <>
                <nav className={estilo}>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Meu Sistema</a>
                        <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">Menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {this.gerarListaBotoes()}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-menu">
                    {this.gerarListaBotoes()}
                </ul>
            </>
        );
    }
}