import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [list, setList] = useState([]);
  let [message, setMessage] = useState("");

  useEffect(() => {
    readAllGreetings();
  }, []);

  let readAllGreetings = async () => {
    let url = "http://localhost:8080/greeting/read-all-record";
    let res = await axios.get(url);

    // update the list for rerender
    setList(res.data.reverse());
  };

  let addNewRecord = async () => {
    let url = "http://localhost:8080/greeting/add-record";
    let data = {
      message: message,
      name: "akshya",
      city: "maumbi",
      state: "mh",
    };
    await axios.post(url, data);

    setMessage("");
    readAllGreetings();
  };

  let messageHandler = (e) => {
    setMessage(e.target.value);
  };

  let handleEnterCode = (e) => {
    console.log(e);
    if (e.keyCode == 13) {
      addNewRecord();
    }
  };

  // UI - RENDER - VIEW
  return (
    <div>
      <h1 className="bg-primary text-light p-3 sticky-top">REST API </h1>

      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Whatsapppp...."
        value={message}
        onChange={messageHandler}
        onKeyUp={handleEnterCode}
      />
      <input
        className="btn btn-primary w-100 m-1"
        type="button"
        value="Add Record"
        onClick={addNewRecord}
      />

      {list.map((item) => (
        <div className="alert alert-primary m-0 mb-1" key={item.id}>
          {item.message}
        </div>
      ))}
    </div>
  );
}

export default App;
