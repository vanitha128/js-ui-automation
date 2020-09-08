@suite
Feature: Find a service NSW location
  I want to find a service NSW location
  @critical
  Scenario: NumberOne
    Given I am a user navigating to the "https://www.service.nsw.gov.au"
    When I search for "Find a Service NSW location"
    When I am re-directed to the search results page
    When I click on the "Find a Service NSW location" link
    Then I am re-directed to the "Find a Service NSW location" page
  @regression
  Scenario: NumberTwo
    Given I am a user on the "Find a Service NSW location" page
    When I search for "Sydney 2000" in the "Search by suburb, postcode or current location" field
    Then I should see "Marrickville Service Centre" and its address returned in the results