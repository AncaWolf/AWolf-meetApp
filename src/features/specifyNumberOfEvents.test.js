import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
// import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import App from '../App';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  // Scenario 1
  test('When user has not specified a number, 32 events are shown by default', ({ given, when, then }) => {
    let AppComponent;
    given('the events app is open', () => { });
    when('the user does not specify a number of events to display', async () => {
      AppComponent = render(<App />);
    });
    then(/^(\d+) events should be shown by default$/, async (arg0) => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  // Scenario 2
  test('User can change the number of events displayed', ({ given, when, then }) => {
    let AppComponent;
    given('the events app is open', () => {
      AppComponent = render(<App />);
    });

    when('the user specifies a different number of events to display', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const NrEventsDOM = AppDOM.querySelector('#number-of-events');
      const nrEventsInput = within(NrEventsDOM).queryByRole('textbox');
      await userEvent.clear(nrEventsInput);
      await userEvent.type(nrEventsInput, '5');
    });

    then('the app should show the specified number of events', () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      const NewNrEvents = within(EventListDOM).queryAllByRole('listitem');
      expect(NewNrEvents.length).toEqual(5);
    });
  });
});
