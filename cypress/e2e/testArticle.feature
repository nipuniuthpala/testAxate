Feature: User Registration on Axate

Scenario: Registering a new user on Staging Site Axate

    Given the user is on the article page
    When the user clicks on "Get a day pass", yellow button, inside the article
    And the user fills in a random email address
    And the user selects "UK" as the country and enters a valid UK postcode
    And the user selects a random preference for marketing preferences
    And the user clicks "Continue"
    And the user selects any payment amount
    And the user selects Voucher
    And the user fills in "QA2024"
    And the user clicks "Continue"
    Then the user should see confirmation "You are ready to read your first article"