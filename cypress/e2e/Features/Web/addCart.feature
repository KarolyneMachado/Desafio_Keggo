Feature: Add product to cart

    Scenario: Add product to the shopping card and verify the cart
        Given Home page is opened
        When Fill in the search field with product
        And Returns image of the searched product
        Then expected to return checkout popup
