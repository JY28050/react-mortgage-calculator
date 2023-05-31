import "./App.css";
import { FcHome } from "react-icons/fc";
import Form from "./components/Form";

function App() {
  return (
    <div
      className="App container"
      style={{ maxWidth: 500, margin: "3rem auto" }}
    >
      <h1 className="display-4 my-5 font-weight-bold" >
        <FcHome />
        <br></br>
        Mortgage Calculator
      </h1>
      <Form />
    </div>
  );
}

export default App;
