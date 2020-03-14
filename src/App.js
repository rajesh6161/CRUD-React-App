import React from "react";

import GetData from "./components/GetData";
import UpdateData from "./components/UpdateData";
import CreateData from "./components/CreateData";
import DeleteData from "./components/DeleteData";
const App = () => {
  let id;
  function handleChange(e) {
    e.preventDefault();
    id = e.target.value;
  }
  function handleClick() {
    console.log(id);
  }
  return (
    <div>
      <GetData />
      <CreateData />
      <DeleteData id={id} />
      <form>
        <input type="text" onChange={handleChange}></input>
      </form>
      <button onClick={handleClick}></button>
    </div>
  );
};
export default App;
