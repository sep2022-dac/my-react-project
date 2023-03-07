import axios from "axios";

function App() {
  let readAllGreetings = () => {
    console.log("Handling Event...onclick event!");

    let url = "http://localhost:8080/greeting/read-all-record";
    axios.get(url);
  };

  // UI - RENDER
  return (
    <div>
      <h1>REST API </h1>
      <input
        type="button"
        value="Read All Greetings"
        onClick={readAllGreetings}
      />
    </div>
  );
}

export default App;
