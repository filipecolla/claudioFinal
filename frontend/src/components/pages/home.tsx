import React, { Component } from "react";
import './home.css';
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string
}

export default class Home extends Component<Props> {
    render() {
        return (
            <div className="container">
                <h5 className="center-align">Bem Vindo!</h5>
                <div>
                    <p>
                        Bem Vindo ao sistema, onde se pode fazer o cadastro de forma rápida e fácil! Aqui, você poderá desfrutar de uma variedade de serviços personalizados para atender às suas necessidades. Ao se cadastrar, você terá acesso a recursos exclusivos, como:
                    </p>
                </div>
            </div>
        );
    }
}