//dark and light mode switch here

export default function LightsOut({ lightSwitch }) {
  return (
    <div className="lightsOut-toggle">
      <button onClick={lightSwitch}>🌜</button>
      <button onClick={lightSwitch}>🌞</button>
    </div>
  );
}
