import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [nrEvents, setNrEvents] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNrEvents(value);
    setCurrentNOE(value);

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Only positive numbers are accepted in this field"
    } else {
      infoText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
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
