import React from "react";
import GetData from "./components/GetData";
import UpdateData from "./components/UpdateData";
import CreateData from "./components/CreateData";
import DeleteData from "./components/DeleteData";
import Zoom from "react-reveal/Zoom";
const App = () => {
  return (
    <div>
      <h2 className="center">Listing Data</h2>
      <GetData />
      <Zoom>
        <CreateData />
      </Zoom>

      <Zoom>
        <UpdateData />
      </Zoom>
      <DeleteData />
    </div>
  );
};
export default App;
