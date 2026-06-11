Feature: Placing an order as a customer 2

    @test1
    Scenario: Test-3: Buy a product and place an order of backpack
        Given Login as a customer to saucedemo.com "standard_user", "secret_sauce"
        When I add a backpack to the cart
        And I proceed to checkout with fill Checkout Details "John Doe", "1234567", "123 Main Street"
        Then I should be able to place an order for the backpack and finish the checkout process


    @test2
    Scenario: Test-4: Buy a product and place an order of backpack
        Given Login as a customer to saucedemo.com "standard_user", "secret_sauce"
        When I add a backpack to the cart
        And I proceed to checkout with fill Checkout Details "John Doe", "1234567", "123 Main Street"
        Then I should be able to place an order for the backpack and finish the checkout process

