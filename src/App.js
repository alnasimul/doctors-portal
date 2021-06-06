import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';

function App() {
  return (
        <Router>
         <Switch>
           <Route exact path='/'>
              <Home></Home>
           </Route>
           <Route path='/appointment'>
             <Appointment></Appointment>
           </Route>
         </Switch>
       </Router>
  );
}

export default App;
