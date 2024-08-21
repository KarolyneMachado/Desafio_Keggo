class RequestProductPost {

requestPost200() {
    const endpoint = '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE';
    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4MjExOTQxMjYsInN1YiI6IlRlc3RlMDQiLCJyb2xlIjoiQURNSU4ifQ.d0bKXPrcL0OSJSBU65mBaLOCFw5WVUbT8zBKisYOCIU';

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
        }).as("statusCode200")
      });

}

requestPost400() {
    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4MjExOTQxMjYsInN1YiI6IlRlc3RlMDQiLCJyb2xlIjoiQURNSU4ifQ.d0bKXPrcL0OSJSBU65mBaLOCFw5WVUbT8zBKisYOCIU';

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
        }).as("statusCode404");
      });

}

requestPost401() {
    const endpoint = '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9';

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
        }).as("statusCode401")
      });

}

requestPost500() {
    const endpoint = '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE';
    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4MjExOTQxMjYsInN1YiI6IlRlc3RlMDQiLCJyb2xlIjoiQURNSU4ifQ.d0bKXPrcL0OSJSBU65mBaLOCFw5WVUbT8zBKisYOCIU';

    cy.api({
        method: 'POST',
        url: `${endpoint}?product_id=15`,
        headers: {
          Authorization: token
        },
        failOnStatusCode: false
      }).as("statusCode500").as("postResponse500")
}
}

export default new RequestProductPost();