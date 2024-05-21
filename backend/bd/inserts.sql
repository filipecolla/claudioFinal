INSERT INTO Produtos (nome, valor) VALUES ('Produto A', 10.99);
INSERT INTO Produtos (nome, valor) VALUES ('Produto B', 20.50);
INSERT INTO Produtos (nome, valor) VALUES ('Produto C', 15.75);
INSERT INTO Produtos (nome, valor) VALUES ('Produto D', 5.00);
INSERT INTO Produtos (nome, valor) VALUES ('Produto E', 30.00);

INSERT INTO Clientes (nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo) VALUES ('Cliente 1', '123.456.789-00', 'cliente1@example.com', 'Rua A', 'Cidade A', 'SP', 'Informação adicional 1', '(11) 11111-1111', 'M');
INSERT INTO Clientes (nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo) VALUES ('Cliente 2', '234.567.890-11', 'cliente2@example.com', 'Rua B', 'Cidade B', 'RJ', 'Informação adicional 2', '(21) 22222-2222', 'F');
INSERT INTO Clientes (nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo) VALUES ('Cliente 3', '345.678.901-22', 'cliente3@example.com', 'Rua C', 'Cidade C', 'MG', NULL, '(31) 33333-3333', 'Outro');
INSERT INTO Clientes (nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo) VALUES ('Cliente 4', '456.789.012-33', 'cliente4@example.com', 'Rua D', 'Cidade D', 'BA', NULL, '(71) 44444-4444', 'F');
INSERT INTO Clientes (nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo) VALUES ('Cliente 5', '567.890.123-44', 'cliente5@example.com', 'Rua E', 'Cidade E', 'RS', 'Informação adicional 3', '(51) 55555-5555', 'M');

INSERT INTO Compra (clienteID, produtoID, quantidadeProduto, valorProduto) VALUES (1, 1, 2, 10.99);
INSERT INTO Compra (clienteID, produtoID, quantidadeProduto, valorProduto) VALUES (2, 2, 1, 20.50);
INSERT INTO Compra (clienteID, produtoID, quantidadeProduto, valorProduto) VALUES (3, 3, 3, 15.75);
INSERT INTO Compra (clienteID, produtoID, quantidadeProduto, valorProduto) VALUES (4, 4, 5, 5.00);
INSERT INTO Compra (clienteID, produtoID, quantidadeProduto, valorProduto) VALUES (5, 5, 2, 30.00);