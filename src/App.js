import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [list, setList] = useState([]);

  useEffect(() => {
    readAllGreetings();
  }, []);

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
      message: document.getElementById("textid").value,
    };
    await axios.post(url, data);

    readAllGreetings();
  };

  // UI - RENDER - VIEW
  return (
    <div>
      <h1>REST API </h1>
      <input type="text" placeholder="Whatsapppp...." id="textid" />
      <input type="button" value="Add Record" onClick={addNewRecord} />

      {list.map((item) => (
        <div key={item.id}>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
