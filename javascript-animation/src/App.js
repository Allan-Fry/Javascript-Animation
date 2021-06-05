import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FirstPage } from './Pages/FirstPage/FirstPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { LandScapePage } from './Pages/LandScapePage/LandScapePage';
import { Container, Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Container>
      <Navbar color="light" light>
        <Nav tabs>
            <NavItem>
              <NavLink href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/FirstPage">
                First Page
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/LandScape">
                Land Scape
              </NavLink>
            </NavItem>
        </Nav>
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
      </Navbar>
    </Container>
  </Router>
  );
}

export default App;
