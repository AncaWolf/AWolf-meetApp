import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  // Scenario 1
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppComponent;
    given('the events app is open', () => { });
    when('I view the list of events', () => { });
    AppComponent = render(<App />);
    then('the event details should be collapsed', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  // Scenario 2
  test('User can expand an event to see details', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('the events app is open', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    });
    when('the user selects an event to view details', async () => {
      const showDetails = EventComponent.queryByText('show details');
      const user = userEvent.setup();
      await user.click(showDetails);
    });
    then('the event details should be expanded', () => {
      expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
      expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    });
  });

  // Scenario 3
  test('User can collapse an event to hide details', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('the event details are expanded for a selected event', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      await user.click(EventComponent.queryByText('show details'));
      expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
    });
    when('the user chooses to collapse the event details', async () => {
      const hideDetails = EventComponent.queryByText('hide details');
      const user = userEvent.setup();
      await user.click(hideDetails);
    });
    then('the event details should be hidden', () => {
      expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
      expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
    });
  });
});
