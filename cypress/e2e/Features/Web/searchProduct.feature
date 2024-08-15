Feature: Search bar

    Scenario: Search product
        Given Home page is opened
        When  Fill in the search field with product
        Then expected to view the searched product
