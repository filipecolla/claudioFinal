import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import axios from 'axios';
import Swal from 'sweetalert2';
import './compra.css';
import { IcompraClienteProduto } from '../../../types/ICompra';
import 'materialize-css/dist/css/materialize.min.css';

const EditarCompraProduto: React.FC<IcompraClienteProduto> = (props) => {
    const [show, setShow] = useState(false);
    const [secaoForm, setSecaoForm] = useState('Informações Básicas');
    const [clienteID, setClienteID] = useState<string | number>(props.cliente.clienteID);
    const [produtoID, setProdutoID] = useState<string | number>(props.produto.produtoID);
    const [quantidadeProduto, setQuantidadeProduto] = useState<string | number>(props.quantidadeProduto);
    const [valorProduto, setValorProduto] = useState<string | number>(props.valorProduto);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setter: React.Dispatch<React.SetStateAction<string | number>>) => {
        const value = event.target.value;
        setter(value);
    }

    const changeSecao = (valor: string) => {
        setSecaoForm(valor);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.put(`http://localhost:5555/comprar/alterar/${props.compraID}`, {
            clienteID,
            produtoID,
            quantidadeProduto,
            valorProduto,
        }).then(() => {
            Swal.fire({
                title: "Compra atualizada com sucesso!",
                icon: "success",
                confirmButtonColor: 'green'
            }).then(() => {
                window.location.reload();
            });
        }).catch(error => {
            console.error("Erro ao atualizar compra", error);
        });
    }

    return (
        <>
            <BsPencil onClick={handleShow} className="edit" />

            <Modal className='modal'
                size='lg'
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-cliente container-fluid'>
                        <form id='editar-cliente' onSubmit={handleSubmit}>
                            <div className='seletor-secao'>
                                <div onClick={() => changeSecao('Informações Básicas')}>Informações</div>
                                <div onClick={() => changeSecao('Compras')}>Compras</div>
                            </div>
                            <h4>{secaoForm}</h4>
                            {secaoForm === 'Informações Básicas' &&
                                <>
                                    <div>
                                        <label htmlFor="cliente">Cliente ID: </label>
                                        <input className="form-control" id="cliente" type="text" value={clienteID} onChange={(e) => handleChange(e, setClienteID)} />
                                    </div>
                                    <div>
                                        <label htmlFor="produto">Produto ID: </label>
                                        <input className="form-control" id="produto" type="text" value={produtoID} onChange={(e) => handleChange(e, setProdutoID)} />
                                    </div>
                                </>
                            }
                            {secaoForm === 'Compras' &&
                                <>
                                    <div>
                                        <label htmlFor="quantidadeProduto">Quantidade de Produto: </label>
                                        <input className="form-control" id="quantidadeProduto" type="text" value={quantidadeProduto} onChange={(e) => handleChange(e, setQuantidadeProduto)} />
                                    </div>
                                    <div>
                                        <label htmlFor="valorProduto">Valor do Produto: </label>
                                        <input className="form-control" id="valorProduto" type="text" value={valorProduto} onChange={(e) => handleChange(e, setValorProduto)} />
                                    </div>
                                </>
                            }
                            <div className='teste'>
                                <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                                <Button variant="primary" type='submit'>Editar</Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditarCompraProduto;