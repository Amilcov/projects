import { useEffect, useState } from 'react';
import ReactSlider from "react-slider";
import { useClimate } from "../../context/ClimateContext";
import './Thermometer.css';

function Thermometer(val) {
  const { temperature, setTemperature } = useClimate();
  const [actualTemperature, setActualTemperature] = useState(50);
  useEffect(changeTemperature, [temperature, actualTemperature]);

  function changeTemperature() {
    let gradeDifference = Math.abs(temperature - actualTemperature);
    let direction = temperature - actualTemperature > 0 ? 1 :-1
    if (gradeDifference) setTimeout(()=> setActualTemperature(actualTemperature + direction), 1000);
  }

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {actualTemperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => setTemperature(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;