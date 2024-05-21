import { IsNull, Not } from "typeorm";
import { AppDataSource } from "../data-source";
import { Clientes } from "../entity/cliente";
import { Compra } from "../entity/compra";
import { Produtos } from "../entity/produto";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const criarCompraCliente = async (clienteID: Clientes , produtoID: Produtos | null, quantidadeProduto: number | null, valorProduto: number | null) => {
    try {
        const valorProdutoTotal = valorProduto ? valorProduto * quantidadeProduto : 0;
        const compraCliente = new Compra(clienteID, produtoID, quantidadeProduto, valorProdutoTotal);
        await compraClienteRepositorio.save(compraCliente);
        console.log("Compra de cliente criada com sucesso");
        return compraCliente;
    } catch (error) {
        console.error("Erro na criação da compra de cliente", error);
        throw error;
    }
};

export const excluirCompraCliente = async (compraID: number) => {
    try {
        const compraCliente = await compraClienteRepositorio.findOneBy({ compraID: compraID});
        if (compraCliente) {
            await compraClienteRepositorio.remove(compraCliente);
            console.log("Compra de cliente excluida com sucesso");
            return 1;
        } else {
            console.log("Compra de cliente inexistente");
            return "Compra de cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na exclusão da compra de cliente", error);
    }
}

export const listarComprasClienteProduto = async () => {
    try {
        const compraClientes = await compraClienteRepositorio.find({
            relations: ["cliente", "produto"],
            where: {
                produto: Not(IsNull())
            }
        });
        console.log("Compras de cliente com produto listadas com sucesso");
        return compraClientes;
    } catch (error) {
        console.error("Erro na listagem das compras de cliente com produto", error);
        throw error;
    }
};

export const alterarCompraCliente = async (compraID: number, clienteID: Clientes | null, produtoID: Produtos | null, quantidadeProduto: number | null, valorProduto: number | null) => {
    try {
        const compraCliente = await compraClienteRepositorio.findOneBy({ compraID: compraID });

        if (compraCliente) {
            compraCliente.cliente = clienteID;
            compraCliente.produto = produtoID;
            compraCliente.quantidadeProduto = quantidadeProduto;
            compraCliente.valorProduto = valorProduto;

            await compraClienteRepositorio.save(compraCliente);
            console.log("Compra de cliente alterada com sucesso");
            return compraCliente;
        } else {
            console.log("Compra de cliente inexistente");
            return "Compra de cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na alteração da compra de cliente", error);
        return "Erro na alteração da compra de cliente";
    }
}