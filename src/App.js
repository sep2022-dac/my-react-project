import axios from "axios";

function App() {
  let readAllGreetings = () => {
    console.log("Handling Event...onclick event!");

    let url = "http://localhost:8080/greeting/read-all-record";
    axios.get(url);
  };

  let addNewRecord = () => {
    let url = "http://localhost:8080/greeting/add-record";
    let data = {
      message: "Using React Making Post Call",
    };
    axios.post(url, data);
  };

  // UI - RENDER - VIEW
  return (
    <div>
      <h1>REST API </h1>
      <input
        type="button"
        value="Read All Greetings"
        onClick={readAllGreetings}
      />

      <h1>Add Record</h1>
      <input type="button" value="Add Record" onClick={addNewRecord} />
    </div>
  );
}

export default App;
