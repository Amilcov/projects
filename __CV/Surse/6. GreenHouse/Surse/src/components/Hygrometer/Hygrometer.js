import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { useClimate } from "../../context/ClimateContext";
import "./Hygrometer.css";

function Hygrometer() {
  const { humidity, setHumidity } = useClimate();
  const [ actualHumidity, setActualHumidity ] = useState(40);
  useEffect(changeHumidity, [humidity, actualHumidity]);

  function changeHumidity() {
    let humidityDifference = Math.abs(humidity - actualHumidity);
    let direction = humidity - actualHumidity > 0 ? 1 : -1;
    //Math.round((num + Number.EPSILON) * 100) / 100

    if(humidityDifference) {
      console.log('\n humidity', humidity);
      console.log('(humidity * 0.02).toFixed(2)',(humidity * 0.02).toFixed(2));
      console.log('actualHumidity', actualHumidity);
      console.log('humidityDifference', humidityDifference);
      let stepHumidity = direction * Math.min((humidity * 0.02).toFixed(2), humidityDifference); 
      console.log('stepHumidity', stepHumidity);
      //stepHumidity=  Math.round((stepHumidity + Number.EPSILON) * 100) / 100;
      let newValue = +(actualHumidity + stepHumidity).toFixed(2);
       console.log('newValue', newValue);

      setTimeout(() => setActualHumidity(newValue), 1000);
    }
  }

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {actualHumidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => {setHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;