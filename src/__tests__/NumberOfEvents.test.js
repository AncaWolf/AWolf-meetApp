import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NrOfEventsComp;
  beforeEach(() => {
    NrOfEventsComp = render(<NumberOfEvents setNumberOfEvents={() => { }} />);
  })

  test('contains element with [textbox] role', () => {
    expect(NrOfEventsComp.queryByRole('textbox')).toBeInTheDocument();
  });

  test('renders 32 events by default', () => {
    expect(NrOfEventsComp.queryByRole('textbox')).toHaveValue('32');
  });

  test('number of events value changes accordingly to user text input in the textbox', async () => {
    const numberOfEvents = NrOfEventsComp.queryByRole('textbox');
    const user = userEvent.setup();
    await user.type(numberOfEvents, '{backspace}{backspace}10');
    expect(numberOfEvents).toHaveValue('10');
  });
})
