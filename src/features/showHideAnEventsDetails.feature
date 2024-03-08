Feature: Show/Hide Event Details
  Scenario: An event element is collapsed by default
    Given the events app is open
    When I view the list of events
    Then the event details should be collapsed

  Scenario: User can expand an event to see details
    Given the events app is open
    When the user selects an event to view details
    Then the event details should be expanded

  Scenario: User can collapse an event to hide details
    Given the event details are expanded for a selected event
    When the user chooses to collapse the event details
    Then the event details should be hidden
