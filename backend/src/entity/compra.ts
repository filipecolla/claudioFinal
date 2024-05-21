import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Clientes } from "./cliente";
import { Produtos } from "./produto";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    compraID: number

    @Column({ default: null })
    quantidadeProduto: number

    @Column({ default: null })
    valorProduto: number

    @ManyToOne(() => Clientes)
    @JoinColumn({ name: "clienteID" })
    cliente: Clientes

    @ManyToOne(() => Produtos)
    @JoinColumn({ name: "produtoID" })
    produto: Produtos

    constructor(cliente: Clientes, produto: Produtos, valorServico: number, quantidadeProduto: number) {
        this.cliente = cliente
        this.produto = produto
        this.valorProduto = valorServico
        this.quantidadeProduto = quantidadeProduto
    }
}