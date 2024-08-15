describe('Testing Search and Cart', () => {
  
    it('Search for a product and validate the return', () => {
      // Acessa a página principal
      cy.visit('https://advantageonlineshopping.com/#/');
  
      // Força o clique no elemento, mesmo que ele não esteja visível
      cy.get('#menuSearch').click({ force: true });
  
      // Força a visibilidade do contêiner
      cy.get('#searchSection').invoke('css', 'display', 'block');
  
      // Verifica se o campo de pesquisa está visível após o clique
      cy.get('#autoComplete').should('be.visible').type('Beats studio 2');

      // Aguarda até que a imagem com o atributo específico esteja visível e clica nela
    cy.get('[data-ng-src="/catalog/fetchImage?image_id=2201"]')
    .should('be.visible') // Garante que o elemento está visível
    .click({ force: true });
    });
  
    it('Add product to the shopping cart and verify the cart', () => {
      // Acessa a página principal
      cy.visit('https://advantageonlineshopping.com/#/');
      
      // Força o clique no elemento de pesquisa, mesmo que não esteja visível
      cy.get('#menuSearch').click({ force: true });
  
      // Força a visibilidade do contêiner de pesquisa
      cy.get('#searchSection').invoke('css', 'display', 'block');
  
      // Verifica se o campo de pesquisa está visível e realiza a busca
      cy.get('#autoComplete').should('be.visible').type('Beats studio 2');
  
      // Aguarda até que a imagem com o atributo específico esteja visível e clica nela
      cy.get('[data-ng-src="/catalog/fetchImage?image_id=2201"]')
        .should('be.visible') // Garante que a imagem está visível
        .click({ force: true });
  
      // Define a quantidade para 2 no campo de entrada com name="quantity"
      cy.get('input[name="quantity"]')
        .should('be.visible')
        .clear() // Limpa o campo de entrada antes de definir o novo valor
        .type('2');
  
      // Aguarda até que o botão com o nome "save_to_cart" esteja visível e clica nele
      cy.get('button[name="save_to_cart"]')
        .should('be.visible') // Garante que o botão está visível
        .click({ force: true });
  
      // Aguarda até que o popup de checkout com o id "checkOutPopUp" esteja visível e clica nele
      cy.get('#checkOutPopUp')
        .should('be.visible') // Garante que o popup está visível
        .click({ force: true });
  
      // Adiciona uma pausa para garantir que o carrinho e seu conteúdo estejam totalmente carregados
      cy.wait(3000); // Aguarda 3 segundos (ajuste conforme necessário)
  
      // Verifica se o elemento com id "userCart" está visível
      cy.get('#userCart')
        .should('be.visible') // Garante que o carrinho está visível
  
      // Verifica se o <h3> com a classe "ng-binding" contém o texto específico
      cy.get('h3.ng-binding')
        .should('be.visible') // Garante que o <h3> está visível
        .and('contain.text', 'BEATS STUDIO 2 OVER-EAR MAT...'); // Verifica o texto específico
    });
  
  });
  
  