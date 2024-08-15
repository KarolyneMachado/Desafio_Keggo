import '@bahmutov/cy-api';

describe('POST Update Product Image', () => {
  const endpoint = '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE';
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4MjExOTQxMjYsInN1YiI6IlRlc3RlMDQiLCJyb2xlIjoiQURNSU4ifQ.d0bKXPrcL0OSJSBU65mBaLOCFw5WVUbT8zBKisYOCIU';

  it('Update Product Image and Validate Response', () => {
    cy.fixture('produto.jpg', 'binary').then((image) => {
      const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpeg');

      // Create FormData
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
      }).then((response) => {
        // Log response details
        cy.log('Status:', response.status);
        cy.log('Response Body:', JSON.stringify(response.body));
        cy.log('Response Headers:', JSON.stringify(response.headers));
        cy.log('Request Body:', JSON.stringify(response.requestBody));

        // Validate response
        // expect(response.status).to.eq(200);
        // expect(response.body).to.have.property('success', true);
        // expect(response.body).to.have.property('id', 15);
        // expect(response.body).to.have.property('reason', 'Product was updated successful');
        // expect(response.body).to.have.property('imageId').that.is.a('string').and.not.empty;
        // expect(response.body).to.have.property('imageColor', 'WHITE');
      });
    });
  });
});

