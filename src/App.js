import axios from "axios";
import { useState } from "react";

function App() {
  let [list, setList] = useState([]);

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let userNameHandler = (e) => {
    setUsername(e.target.value);
  };

  let passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  let getJwt = async () => {
    let url = "http://localhost:8080/auth/authenticate/";
    let data = {
      username: username,
      password: password,
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
      productId: "RANDOM ID",
      productName: "WIND",
      productQty: 1,
      productPrice: 599.99,
      purchaseDate: "23/02/2022",
      offer: true,
    };

    let jwt = localStorage.getItem("jwt");
    let config = { headers: { Authorization: `Bearer ${jwt}` } }; // string literals
    await axios.post(url, data, config);

    readAllOrders();
  };

  // UI - RENDER - VIEW
  return (
    <div>
      <h1>REST API </h1>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={userNameHandler}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={passwordHandler}
      />

      <input type="button" value="Get JWT via Login" onClick={getJwt} />

      <div></div>
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
