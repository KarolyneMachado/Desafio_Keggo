import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import '@bahmutov/cy-api'

const endpoint = '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE';
let token;

Given('that I need to send a Request', () => {
  token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4MjExOTQxMjYsInN1YiI6IlRlc3RlMDQiLCJyb2xlIjoiQURNSU4ifQ.d0bKXPrcL0OSJSBU65mBaLOCFw5WVUbT8zBKisYOCIU';

})

Given('that I need to send a Request without authorization', () => {
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9';
});

When('send request method POST', () => {
  cy.fixture('produto.jpg', 'binary').then((image) => {
    const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpeg');
    const formData = new FormData();
    formData.append('file', blob, 'produto.jpg');

    cy.api({
      method: 'POST',
      url: `${endpoint}?product_id=15`,
      headers: {
        Authorization: token
      },
      body: formData,
      formData: true,
      failOnStatusCode: false
    }).as("postRequestUpdate200").as("postRequestUpdate401").as("postRequestUpdate500")
  });
})

Then('expected code 200 sucess', () => {
  cy.get("@postRequestUpdate200").should((response) => {
    expect(response.status).to.eq(200)
  })
})

Then('expected code 401 unauthorized', () => {
  cy.get("@postRequestUpdate401").should((response) => {
    expect(response.status).to.eq(401)
  })
})


When('send request method POST with server error', () => {
  cy.api({
    method: 'POST',
    url: `${endpoint}?product_id=15`,
    headers: {
      Authorization: token
    },
    failOnStatusCode: false
  }).as("postRequestUpdate500")

})


Then('expected code 500 server error', () => {
  cy.get("@postRequestUpdate500").should((response) => {
    expect(response.status).to.eq(500)
    expect(response.body).to.have.property('timestamp').that.is.a('number');
    expect(response.body).to.have.property('status', 500);
    expect(response.body).to.have.property('error', 'Internal Server Error');
    expect(response.body).to.have.property('path', '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE');
  })
})

When('send request method POST with product not found', () => {
  cy.fixture('produto.jpg', 'binary').then((image) => {
    const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpeg');
    const formData = new FormData();
    formData.append('file', blob, 'produto.jpg');

    cy.api({
      method: 'POST',
      url: '/catalo/api/v1/product/image/nonexistent_product_id/%23FFFFF/WHITE',
      headers: {
        Authorization: token
      },
      body: formData,
      formData: true,
      failOnStatusCode: false
    }).as("postRequestEndpointNotFound404");
  });
});


Then('expected code 404 not found', () => {
  cy.get("@postRequestEndpointNotFound404").should((response) => {
    expect(response.status).to.eq(404)
  })
})