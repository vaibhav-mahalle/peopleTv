import "./App.css";
import logo from "./logo.png";
import {RouterPath} from "./routes/RouterPath";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RouterPath/>
    </div>
  );
}

export default App;
