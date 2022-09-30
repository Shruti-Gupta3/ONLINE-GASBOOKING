import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Customer from './components/Customer';
import SavedCustomer from './components/SavedCustomer';
import Cylinder from './components/Cylinder';
import Bank from './components/Bank';
import SurrenderCylinder from  './components/SurrenderCylinder';
import Home from './components/Home';
import RegisteredCylinder from './components/RegisteredCylinder';
import RegisteredBank from './components/RegisteredBank';
import SurrenderedCylinders from './components/SurrenderedCylinders'

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Switch>
        <Route exact path = "/" component = {Header}></Route> 
        <Route path = "/home" component = {Home}></Route>
          <Route path = "/customer" component = {Customer}></Route>
          <Route path = "/savedcustomer" component = {SavedCustomer}></Route>
          <Route path = "/cylinder" component = {Cylinder}></Route>
          <Route path = "/bank" component = {Bank}></Route>
          <Route path = "/surrendercylinder" component = {SurrenderCylinder}></Route>
          <Route path = "/registeredcylinder" component ={RegisteredCylinder}></Route>
          <Route path = "/registeredbank" component ={RegisteredBank}></Route>
          <Route path = "/surrenderedcylinders" component ={SurrenderedCylinders}></Route>
          
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
