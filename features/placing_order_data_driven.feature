Feature: Placing an order as a customer
    Background:
    Given Login as a customer to saucedemo.com "standard_user", "secret_sauce"
    @data-driven
    Scenario Outline: Data driven Test-1: Buy a product and place an order of backpack
        When I add a backpack to the cart
        And  I proceed to checkout with fill Checkout Details "<name>", "<postalCode>", "<address>"
        Then I should be able to place an order for the backpack and finish the checkout process

        Examples:
            | name       | postalCode | address         |
            | John Doe   | 1234567    | 123 Main Street |
           # | Jane Doee  | 1234568    | 124 Main Street |
            #| John Doeee | 1234569    | 125 Main Street |



    @data-driven2
    Scenario Outline: Data driven Test-2: Buy a product and place an order of backpack
        When I add a backpack to the cart
        And I proceed to checkout with fill Checkout Details "<name>", "<postalCode>", "<address>"
        Then I should be able to place an order for the backpack and finish the checkout process

        Examples:
            | name      | postalCode | address         |
            | John Do   | 1234567    | 123 Main Street |
            | Jane Doo  | 1234568    | 124 Main Street |
            | John Dooo | 1234569    | 125 Main Street |
