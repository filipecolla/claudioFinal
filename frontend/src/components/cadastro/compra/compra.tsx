import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Swal from "sweetalert2";
import './compra.css';
import EditarCompraProduto from "./editarCompra";
import axios from "axios";
import 'materialize-css/dist/css/materialize.min.css';
import { IcompraClienteProduto } from "../../../types/ICompra";

function CompraProduto(cliente: IcompraClienteProduto) {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    function deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir o cliente?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:5555/comprar/excluir/' + cliente.compraID, {data: {id: cliente.compraID}})
                .then(() => {
                    Swal.fire({
                        title: "Cliente excluído com sucesso!",
                        icon: "success",
                        confirmButtonColor: 'green'
                    }).then(() => {
                        window.location.reload()
                    })
                })
            }
          });
    }

    return(
        <div className="list-group-item list-group-item-action">
            <div className="item-listado">
                    <div className="cliente-details">
                        <h5> Cliente: {cliente.cliente.nome}</h5>
                    <div className="acoes">
                        <EditarCompraProduto
                            cliente={cliente.cliente}
                            produto={cliente.produto}
                            quantidadeProduto={cliente.quantidadeProduto}
                            valorProduto={cliente.valorProduto} 
                            compraID={cliente.compraID}                      
                        ></EditarCompraProduto>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                        <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
            </div>
            </div>
            {show && 
                <div className="cliente-details">
                    <div className="detalhes">
                        <h3>Informações básicas</h3>
                            <div><b>Compra ID: </b>{cliente.compraID}</div>
                            <div><b>Cliente ID: </b>{cliente.cliente.nome}</div>
                            <div><b>Produto ID: </b>{cliente.produto.nome}</div>
                        </div>                            
                    <div className="detalhes">
                        <h3>Compra</h3>
                            <div><b>Quantidade do produto: </b>{cliente.quantidadeProduto}</div>
                            <div><b>Valor do produto: </b>{cliente.valorProduto}</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default CompraProduto;