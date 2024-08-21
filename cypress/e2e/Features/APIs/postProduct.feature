Feature: Request Method POST API Product

    Scenario: Request endpoint update image
        Given that I need to send a Request
        When send request method POST
        Then expected code 200 sucess

    Scenario: Unauthorized request
        Given that I need to send a Request without authorization
        When send request method POST not authorization
        Then expected code 401 unauthorized

    Scenario: Product not found
        Given that I need to send a Request
        When send request method POST with product not found
        Then expected code 404 not found

    Scenario: Server error during upload
        Given that I need to send a Request
        When send request method POST with server error
        Then expected code 500 server error