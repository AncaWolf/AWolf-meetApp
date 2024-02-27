import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NrOfEventsComp;
  beforeEach(() => {
    NrOfEventsComp = render(<NumberOfEvents />);
    // NrOfEventsComp = render(<NumberOfEvents setNumberOfEvents={() => { }} />);
  })

  test('renders number of events text input', () => {
    const nrEventsTextBox = NrOfEventsComp.queryByRole('textbox');
    expect(nrEventsTextBox).toBeInTheDocument();
    expect(nrEventsTextBox).toHaveClass('number-of-events-input');
  });

  test('contains element with [textbox] role', () => {
    expect(NrOfEventsComp.queryByRole('textbox')).toBeInTheDocument();
  });

  test('renders 32 events by default', () => {
    expect(NrOfEventsComp.queryByRole('textbox')).toHaveValue('32');
  });

  test('number of events value changes accordingly to user text input in the textbox', async () => {
    const nrEventsTextBox = NrOfEventsComp.queryByRole('textbox');
    const user = userEvent.setup();
    await user.type(nrEventsTextBox, "123")
    // await user.type(nrEventsTextBox, '{backspace}{backspace}10');
    expect(nrEventsTextBox).toHaveValue('32123');
  });
});
