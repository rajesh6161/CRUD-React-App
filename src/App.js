import React from "react";

import GetData from "./components/GetData";
import UpdateData from "./components/UpdateData";
import CreateData from "./components/CreateData";
import DeleteData from "./components/DeleteData";
const App = () => {
  return (
    <div>
      <h2 className="center">Listing Data</h2>
      <GetData />
      <CreateData />
      <UpdateData />
      <DeleteData />
    </div>
  );
};
export default App;
