# Desafio_Keggo

![image](https://user-images.githubusercontent.com/86740236/232256249-21c992f2-27db-475d-b20f-3e7fbd1e72b5.png)

## Tecnologias

- **Cucumber** para a escrita dos cenários solicitados seguindo BDD.
- **Javascript** como linguagem de programação.
- **Cypress** como framework para automação de testes.

## Projeto

Este projeto é um desafio que envolve testes automatizados para um site de compras online e uma API. A estrutura do projeto está organizada usando o padrão de Page Objects.

### Desafio Web

Teste o site [Advantage Online Shopping](https://advantageonlineshopping.com/#/) com os seguintes cenários:

1. **Buscar um produto:**
   - Realize uma busca por um produto específico.

2. **Incluir produto no carrinho:**
   - Adicione o produto encontrado ao carrinho de compras.

3. **Validar produtos no carrinho:**
   - Na tela de pagamento, valide os produtos incluídos no carrinho.

### Desafio API

Documente e teste as APIs disponíveis em [Advantage Online Shopping API Documentation](https://www.advantageonlineshopping.com/api/docs/):

1. **Verificar lista de produtos:**
 - **API Endpoint:** `/catalog/api/v1/products/search`
   - Certifique-se de que a lista exibe apenas os produtos conforme sua busca.
   - Valide o status code da resposta do serviço.

2. **Atualizar imagem de um produto (PUT):**
   - **API Endpoint:** `/catalog/api/v1/product/image/{userId}/{source}/{color}`
   - Verifique se a imagem do produto foi atualizada corretamente.
   - Confirme o id da nova imagem inserida.
   - Valide o status code da resposta do serviço.

   **Observação:** Será necessário criar um usuário e fazer login antes de atualizar a imagem de um produto.

## Instalações

Para configurar o ambiente e executar os testes, você precisará instalar as seguintes ferramentas:

1. **Node.js** - Gerenciador de pacotes e ambiente de execução para Javascript.
2. **Cypress** - Ferramenta para automação de testes end-to-end.
3. **VSCode** - Editor de código recomendado.
4. **Cucumber** - Framework para testes baseados em BDD.
5. **bahmutov/cy-api** - Plugin para requisições de API no Cypress.

## Comandos

1. **Abrir o Cypress:**

   Para abrir a interface gráfica do Cypress e interagir com os testes manualmente, use o seguinte comando:

   ```bash
   npx cypress open
   ```

   Para executar todos os testes em modo headless (sem abrir a interface gráfica), use o comando:

   ```bash
   npx cypress run
   ```

   Para rodar apenas um teste específico, use o comando:

   ```bash
   npx cypress run --spec "caminho/para/o/arquivo.spec.js"
   ```