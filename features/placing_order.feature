Feature: Placing an order as a customer

    @test1 @uat @reg @prod
    Scenario: Test-1: Buy a product and place an order of backpack
        Given Login as a customer to saucedemo.com "standard_user", "secret_sauce"
        When I add a backpack to the cart
        And I proceed to checkout with fill Checkout Details "John Doe", "1234567", "123 Main Street"
        Then I should be able to place an order for the backpack and finish the checkout process

        
    @test2 @reg 
    Scenario: Test-2: Buy a product and place an order of backpack
        Given Login as a customer to saucedemo.com "standard_user", "secret_sauce"
        When I add a backpack to the cart
        And I proceed to checkout with fill Checkout Details "John Doe", "1234567", "123 Main Street"
        Then I should be able to place an order for the backpack and finish the checkout process

