//dark and light mode switch here
import "../styles/componentStyles/LightsOut.css";

export default function LightsOut({ lightSwitch }) {
  return (
    <div className="lightsOut-toggle">
      <button onClick={lightSwitch}>💡</button>
    </div>
  );
}
