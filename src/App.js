import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClassBasedCompDemo from './components/Types/ClassBasedCompDemo';
import FunctionBasedCompDemo from './components/Types/FunctionBasedCompDemo';
import Parent from './components/CmpCommunication/Parent';
import StateParent from './components/StateDemo/StateParent';
import Notes from './components/Notes/Notes';

function App() {
  return (
    <div className="container">
      <h1 className="display-4 text-center">Notes App</h1>
      <hr />
      <Notes />
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
