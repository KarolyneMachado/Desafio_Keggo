Feature: Request Method GET API Product

    Scenario: Request Endpoint Seach Product
        Given that I need to send a Request for Beats
        When send request method get
        Then expected status code 200 sucess

    Scenario: Product not found
        Given that I need to send a Request 404 for NotFound
        When send request method get return code 404
        Then expected status code 404 not found

    Scenario: Internal server error
        Given that I need to send a Request 500
        When send request method get return code 500
        Then expected status code 500 server error
