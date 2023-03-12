import axios from "axios";
import { useState } from "react";

function App() {
  let [list, setList] = useState([]);

  let getJwt = async () => {
    let url = "http://localhost:8080/auth/authenticate/";
    let data = {
      username: "nikhil",
      password: "test123",
    };

    let res = await axios.post(url, data);
    console.log(res.data.jwt);

    localStorage.setItem("jwt", res.data.jwt);
  };

  let readAllOrders = async () => {
    let url = "http://localhost:8080/order/";
    let jwt = localStorage.getItem("jwt");

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
      <input type="button" value="Get JWT via Login" onClick={getJwt} />
      <input type="button" value="Read All Order" onClick={readAllOrders} />
      <input type="button" value="Add Record" onClick={addNewRecord} />

      {list.map((item) => (
        <div key={item.id}>
          {item.id} {item.productId} {item.productName}
        </div>
      ))}
    </div>
  );
}

export default App;
