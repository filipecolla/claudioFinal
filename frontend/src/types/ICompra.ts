export default interface IcompraCliente {
    compraID: string;
    cliente: {
        clienteID: string;
        nome: string;
        email: string;
        cpf: string;
        rua: string;
        cidade: string;
        estado: string;
        informacoesAdicionais: string;
        telefone: string;
    };
    produto: {
        produtoID: string;
        nome: string;
        valor: string;
    };
    quantidadeProduto: string;
    valorProduto: string;
}

export interface IcompraClienteProduto {
    compraID: string;
    cliente: {
        clienteID: string;
        nome: string;
        email: string;
        cpf: string;
        rua: string;
        cidade: string;
        estado: string;
        informacoesAdicionais: string;
        telefone: string;
    };
    produto: {
        produtoID: string;
        nome: string;
        valor: string;
    };
    quantidadeProduto: string;
    valorProduto: string;
}