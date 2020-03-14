import React from "react";

import GetData from "./components/GetData";
import UpdateData from "./components/UpdateData";
import CreateData from "./components/CreateData";
import DeleteData from "./components/DeleteData";
const App = () => {
  return (
    <div>
      <GetData />
      <CreateData />
      <UpdateData />
      <DeleteData />
    </div>
  );
};
export default App;
