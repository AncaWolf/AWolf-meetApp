Feature: Specify number of events
  Scenario: When user has not specified a number, 32 events are shown by default
    Given the events app is open
    When the user does not specify a number of events to display
    Then 32 events should be shown by default

  Scenario: User can change the number of events displayed
    Given the events app is open
    When the user specifies a different number of events to display
    Then the app should show the specified number of events
