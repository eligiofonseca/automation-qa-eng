Feature: Verify Text Presence
  As a user
  I want to verify that a webpage contains specific text

  Scenario: Check Text Presence
    Given I open the webpage
    Then the webpage should contain the text "BDD"
