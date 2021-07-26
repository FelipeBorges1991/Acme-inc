import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";

import home from "../routecomponents/Home";
import ProductsList from "../routecomponents/ProductsList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/products" component={ProductsList}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
