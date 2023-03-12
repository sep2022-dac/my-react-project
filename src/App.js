import axios from "axios";
import { useState } from "react";

function App() {
  let [list, setList] = useState([]);

  let readAllOrders = async () => {
    let url = "http://localhost:8080/order/";
    let jwt = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaWtoaWwiLCJpc3MiOiJjZGFjIiwiaWF0IjoxNjc4NTk3Mzk2LCJleHAiOjE2Nzg2MDA5OTZ9.VZ8e0xI-iPPQU0edVJQxW4kW0zjIl1FTMf8dywfKtXRIUSQlU2Z5FNCUTYP_P7A4D-cUUyQ5m2UleycQ5xty9Q`;

    // let res = await axios.get(url);

    let config = { headers: { Authorization: `Bearer ${jwt}` } }; // string literals
    let res = await axios.get(url, config);

    // console.log(res);
    // update the list for rerender
    setList(res.data.reverse());
  };

  let addNewRecord = async () => {
    let url = "http://localhost:8080/order/";
    let data = {
      message: "Helloooooooooooo",
    };
    await axios.post(url, data);

    readAllOrders();
  };

  // UI - RENDER - VIEW
  return (
    <div>
      <h1>REST API </h1>
      <input type="button" value="Read All Order" onClick={readAllOrders} />
      <input type="button" value="Add Record" onClick={addNewRecord} />

      {list.map((item) => (
        <div key={item.id}>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
