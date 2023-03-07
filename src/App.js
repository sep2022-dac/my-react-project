import axios from "axios";
import { useState } from "react";

function App() {
  let [list, setList] = useState([]);

  let readAllGreetings = async () => {
    let url = "http://localhost:8080/greeting/read-all-record";
    let res = await axios.get(url);

    // console.log(res);
    // update the list for rerender
    setList(res.data.reverse());
  };

  let addNewRecord = async () => {
    let url = "http://localhost:8080/greeting/add-record";
    let data = {
      message: "Helloooooooooooo",
    };
    await axios.post(url, data);

    readAllGreetings();
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
      <input type="button" value="Add Record" onClick={addNewRecord} />

      {list.map((item) => (
        <div key={item.id}>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
