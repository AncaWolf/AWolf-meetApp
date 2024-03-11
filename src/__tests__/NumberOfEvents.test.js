import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NrOfEventsComp;
  const setCurrentNOE = jest.fn(); //Mock function to simulate prop function (tutor suggestion)

  beforeEach(() => {
    NrOfEventsComp = render(<NumberOfEvents currentNOE={"32"} setCurrentNOE={setCurrentNOE} setErrorAlert={() => { }} />); //Initialize the component with mock props (tutor suggestion)
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
    await user.clear(nrEventsTextBox); //clear the input before typing the new value (tutor suggestion)
    await user.type(nrEventsTextBox, "123")
    expect(nrEventsTextBox).toHaveValue('123');
    expect(setCurrentNOE).toHaveBeenCalledWith("123"); //verify that setCurrentNOE was called with the new value (tutor suggestion)
  });
});
