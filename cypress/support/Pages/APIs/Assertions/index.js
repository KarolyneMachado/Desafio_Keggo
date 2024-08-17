class Assertions {

    validationStatusCode200() {
        cy.get("@statusCode200").should((response) => {
            expect(response.status).to.eq(200);
        })
    }

    validationResponse200() {
        cy.get("@getResponse200").should((response) => {
            const category = response.body[0];

            expect(category.products).to.exist;
            expect(category.products).to.be.an('array');

            if (category.products) {
                category.products.forEach((product) => {
                    expect(product.productName).to.include('Beats Studio 2 Over-Ear Matte Black Headphones');
                });
            }

        })
    }

    validationStatusCode404() {
        cy.get("@statusCode404").should((response) => {
            expect(response.status).to.eq(404);
        });
    }

    validationStatusCode401() {
        cy.get("@statusCode401").should((response) => {
            expect(response.status).to.eq(401);
        });
    }

    validationStatusCode500() {
        cy.get("@statusCode500").should((response) => {
            expect(response.status).to.eq(500);
        });
    }

    validationResponse500() {
        cy.get("@postResponse500").should((response) => {
            expect(response.status).to.eq(500)
            expect(response.body).to.have.property('timestamp').that.is.a('number');
            expect(response.body).to.have.property('status', 500);
            expect(response.body).to.have.property('error', 'Internal Server Error');
            expect(response.body).to.have.property('path', '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE');
        })

    }
}

export default new Assertions();