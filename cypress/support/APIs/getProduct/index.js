class RequestProductGET {
    requestGet() {
        const endpoint = `/catalog/api/v1/products/search?name=Beats`;
        cy.api({
            url: endpoint,
            method: 'GET',
            failOnStatusCode: false
        }).as("statusCode200").as("getResponse200")
    }

    requestGet400() {
        const endpoint = `/catalo/api/v1/products/search?name=NotFound`;

        cy.api({
            url: endpoint,
            method: 'GET',
            failOnStatusCode: false
        }).as("statusCode404")
    }

    requestGet500() {
        const endpoint = `/catalog/api/v1/products/search?`;

        cy.api({
            url: endpoint,
            method: 'GET',
            failOnStatusCode: false
        }).as("statusCode500")
    }
}
export default new RequestProductGET();