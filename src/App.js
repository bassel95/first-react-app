import logo from './logo.svg';
import './App.css';
import { SchritThree } from "./Schritt-3/SchritThree";
import { SchritTwo } from './Schritt-2/SchritTwo';
import { SchrittOne } from './Schritt-1/SchrittOne';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


function App() {

  

  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route path="/test1" component={SchritTwo}/>
          
          <Route path="/test2">
            <SchritThree />
          </Route>

          <Route exact path="/">
            < SchrittOne />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
