import "./listagem.css"

type props = {
    seletorView: Function
}

function Listagem(props: props) {
    return(
        <>
            <h3 className="cadastro-title">O que deseja listar?</h3>
            <div className="opcoes-cadastro">
                <button onClick={(e) => props.seletorView('ListaCliente', e)}>Lista de Clientes</button>
                <button onClick={(e) => props.seletorView('ListaProduto', e)}>Lista de Produtos</button>
                <button onClick={(e) => props.seletorView('ListaCompraProduto', e)}>Lista compras de Produtos</button>
            </div>
        </>
    )
}

export default Listagem;