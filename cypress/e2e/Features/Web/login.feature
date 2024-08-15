Feature: Login

    Scenario: Login valid
        Given Login page
        When login with valid credentials
        Then expected to log in sucessfully

    Scenario: Login invalid
        Given Login page
        When login with invalid credentials
        Then expected to return an error message
