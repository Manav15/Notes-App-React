import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClassBasedCompDemo from './components/Types/ClassBasedCompDemo';
import FunctionBasedCompDemo from './components/Types/FunctionBasedCompDemo';
import Parent from './components/CmpCommunication/Parent';
import StateParent from './components/StateDemo/StateParent';
import Notes from './components/Notes/Notes';
import RefsDemo from './components/RefsDemo/RefsDemo';
import HooksDemo from './components/HooksDemo/HooksDemo';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
function App() {
  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/notes">Notes APP</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hooks">Hooks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/refs">Refs</Link>
            </li>
          </ul>
          </nav>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/hooks">
            <HooksDemo />
          </Route>
          <Route path="/refs">
            <RefsDemo />
          </Route>
      </Router>

      {/* <RefsDemo />
      <HooksDemo />
      <br />
      <h1 className="display-4 text-center App">Notes App</h1>
      <hr />
      <div className="container App-body">
      <Notes />
      </ div> */}
    </div>

    // <div className="App">
    //   <h1 className="display-4">Hello World</h1>
    //   <hr />
    //   <StateParent />
    //   {/*<Parent />
    //   <hr />
    //   <ClassBasedCompDemo />
    //   <hr/>
    //   <FunctionBasedCompDemo />
    //   */}
    // </div> 

  );
}

export default App;
