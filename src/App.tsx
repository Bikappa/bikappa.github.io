import "./App.css";

function App() {
  return (
    <div
      style={{
        background: "url('industrial.svg') no-repeat",
        backgroundPosition: "left bottom",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center justify-center w-screen h-screen"
    >
      <h2 className="font-semibold">BIKAPPA.COM</h2>
      <div className="divider">
        <progress className="progress w-56 progress-accent" />
      </div>
      <h3>This website is under construction</h3>
    </div>
  );
}

export default App;
