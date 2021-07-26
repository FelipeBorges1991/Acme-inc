import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#193C40",
        fontFamily: "monospace",
        color: "#F2EDE9",
        minHeight: "900px",
      }}
    >
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
