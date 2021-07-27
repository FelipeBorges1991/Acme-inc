import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";

import home from "../routecomponents/Home";
import ProductsList from "../routecomponents/ProductsList";
import ProductDetail from "../routecomponents/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/products" component={ProductsList}></Route>
          <Route exact path="/productdetail/:id" component={ProductDetail}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
