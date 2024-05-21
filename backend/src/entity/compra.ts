import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Clientes } from "./cliente";
import { Produtos } from "./produto";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    compraID: number | undefined;

    @ManyToOne(() => Clientes)
    @JoinColumn({ name: "clienteID" })
    cliente: Clientes;

    @ManyToOne(() => Produtos)
    @JoinColumn({ name: "produtoID" })
    produto: Produtos;

    @Column({default: null})
    quantidadeProduto: number;

    @Column({default: null})
    valorProduto: number;

    constructor(cliente: Clientes, produto: Produtos, quantidadeProduto: number, valorProduto: number) {
        this.cliente = cliente;
        this.produto = produto;
        this.quantidadeProduto = quantidadeProduto;
        this.valorProduto = valorProduto;
    }
}