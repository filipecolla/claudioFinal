import express, { Request, Response} from "express";
import { criarCompraCliente, alterarCompraCliente, excluirCompraCliente, listarComprasClienteProduto } from "../controllers/compra";

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { clienteID, produtoID, quantidadeProduto, valorProduto } = req.body;
    if (clienteID === '') {
        return res.status(400).json({ error: "Preencha o ClienteID" });
    }
    try {
        const compraCliente = await criarCompraCliente(clienteID, produtoID, quantidadeProduto, valorProduto);
        res.json(compraCliente);
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar compra de cliente" });
    }
});

router.delete('/excluir/:compraClienteID', async (req: Request, res: Response) => {
    const compraClienteID = req.params.compraClienteID;
    if (compraClienteID === '') {
        return res.status(400).json({ error: "Informe o ID da compra do cliente" });
    }
    res.json(await excluirCompraCliente(Number(compraClienteID)));
});

router.get('/listarProduto', async (req: Request, res: Response) => {
    try {
        const comprasCliente = await listarComprasClienteProduto();
        res.json(comprasCliente);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar compras de cliente" });
    }
});

router.put('/alterar/:compraClienteID', async (req: Request, res: Response) => {
    const compraClienteID = req.params.compraClienteID;
    let { clienteID, produtoID, quantidadeProduto, valorProduto} = req.body;
    if (compraClienteID === '' || clienteID === '') {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    res.json(await alterarCompraCliente(Number(compraClienteID), clienteID, produtoID, quantidadeProduto, valorProduto));
});

export default router;