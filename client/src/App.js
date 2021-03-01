import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import './App.css'
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./private/PrivateRoute";
import RouteLinks from "./private/RouteLinks";
import NotFound from "./components/NotFound";
import Create from "./components/Create";
import Edit from "./components/Edit";
import EditImage from "./components/EditImage";
import Store from "./store";
import About from "./components/About";
import Egitim from "./components/Eğitim"
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/egitim" component={Egitim} />
          <Route path="/" exact component={Home} />
          <RouteLinks path="/kayitol" exact component={Register} />
          <RouteLinks path="/giris" exact component={Login} />
          <PrivateRoute path="/dashboard/:page?" exact component={Dashboard} />
          <PrivateRoute path="/create" exact component={Create} />
          <PrivateRoute path="/edit/:id" exact component={Edit} />
          <PrivateRoute path="/updateImage/:id" exact component={EditImage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
