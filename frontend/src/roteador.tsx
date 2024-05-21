import { Component } from "react";
import BarraNavegacao from "./navbar";
import Home from "./components/pages/home";
import Cadastro from "./components/cadastro/cadastro";
import Listagem from "./components/listagem/listagem";
import FormularioCadastroCliente from "./components/cadastro/cliente/cadastroCliente";
import FormularioCadastroProduto from "./components/cadastro/produto/cadastroProduto";
import FormularioCadastroCompraProduto from "./components/cadastro/compra/cadastroCompra";
import ListaCliente from "./components/listagem/cliente/listaClientes";
import ListaProdutos from "./components/listagem/produto/listaProdutos";
import ListaCompra from "./components/listagem/compra/listaCompras";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="black" 
        botoes={['Home', 'Cadastro', 'Listas']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="black" />
                </>
            )
        } else if (this.state.tela === 'Cadastro') {
            return (
                <>
                    {barraNavegacao}
                    <Cadastro seletorView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'Listas') {
            return (
                <>
                    {barraNavegacao}
                    <Listagem seletorView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'CadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="black"/>
                </>
            )
        } else if (this.state.tela === 'CadastroProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="black"/>
                </>
            )
        } else if (this.state.tela === 'CadastroCompraProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCompraProduto tema="black" />
                </>
            )
        } else if (this.state.tela === 'ListaCliente') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="black" />
                </>
            )
        } else if (this.state.tela === 'ListaProduto') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="black" />
                </>
            )
        } else if (this.state.tela === 'ListaCompraProduto') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCompra tema="black" />
                </>
            )
        }
}
}