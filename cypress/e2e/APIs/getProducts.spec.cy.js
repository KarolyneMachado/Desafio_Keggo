/// <reference types="cypress" />

import '@bahmutov/cy-api'

describe('GET Products APIs', () => {
  const endpoint = '/catalog/api/v1/products/search?name=Beats';

  it('GET Product Beats', () => {
    cy.api({
        url: endpoint,
        method:'GET',
        failOnStatusCode: false
    }).then((response) => {
    
      // Verifica o status code
      expect(response.status).to.eq(200);

      // Acessa o primeiro elemento do array
      const category = response.body[0];
      
      // Valida se o campo 'products' existe e é um array
      expect(category.products).to.exist;
      expect(category.products).to.be.an('array');

      // Se existir e for um array, itere sobre ele
      if (category.products) {
        category.products.forEach((product) => {
          expect(product.productName).to.include('Beats Studio 2 Over-Ear Matte Black Headphones');
        });
      }

    });
  });

  it('GET All Products', () => {
    cy.api({
        url: '/catalog/api/v1/products',
        method:'GET',
        failOnStatusCode: false
    }).then((response) =>{
      // Verifica o status code
      expect(response.status).to.eq(200);
    })
      
  });

  
});
