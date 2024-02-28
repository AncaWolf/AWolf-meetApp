import { useState } from "react";

// const NumberOfEvents = ({ setNumberOfEvents }) => {
const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [nrEvents, setNrEvents] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNrEvents(value);
    setCurrentNOE(value);
    // setNumberOfEvents(value);
  }

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        className="number-of-events-input"
        id="number-of-events-input"
        type="text"
        value={nrEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;
