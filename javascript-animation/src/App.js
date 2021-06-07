import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FirstPage } from './Pages/FirstPage/FirstPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { LandScapePage } from './Pages/LandScapePage/LandScapePage';
//import { Container, Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Componenrs/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
    <Switch>
          <Route path="/LandScape">
            <LandScapePage />
          </Route>
          <Route path="/FirstPage">
            <FirstPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
