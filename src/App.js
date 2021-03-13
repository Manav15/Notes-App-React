import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClassBasedCompDemo from './components/Types/ClassBasedCompDemo';
import FunctionBasedCompDemo from './components/Types/FunctionBasedCompDemo';

function App() {
  return (
    <div className="App">
      <h1 className="display-4">Hello World</h1>
      <hr />
      <ClassBasedCompDemo />
      <hr/>
      <FunctionBasedCompDemo />
    </div>
  );
}

export default App;
