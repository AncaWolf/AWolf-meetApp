import { render } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';

describe('<EventList /> component', () => {
  test('has an element with "list" role', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const EventListComponent = render(<EventList />);
    // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/prefer-presence-queries
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', () => {
    const EventListComponent = render(<EventList events={
      [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    } />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  });
});
