import { useState } from "react";

// const NumberOfEvents = ({ setNumberOfEvents }) => {
const NumberOfEvents = ({ }) => {
  const [nrEvents, setNrEvents] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNrEvents(value);
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
