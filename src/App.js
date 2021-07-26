import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F0E3CA",
        fontFamily: "monospace",
        color: "#1B1A17",
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
