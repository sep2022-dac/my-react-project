import axios from "axios";

function App() {
  let list = [
    { id: 17, message: "Using React Making Post Call 1" },
    { id: 18, message: "Using React Making Post Call 2" },
    { id: 19, message: "Using React Making Post Call 3" },
    { id: 20, message: "Using React Making Post Call 4" },
  ];

  // UI - RENDER - VIEW
  return (
    <div>
      <h1>Static List </h1>
      {list.map((item) => (
        <div key={item.id}>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
