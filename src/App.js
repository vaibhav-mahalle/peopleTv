import "./App.css";
import logo from "./logo.png";
import { RouterPath } from "./routes/RouterPath";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SideNav, TopNav } from "./components";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="app-container">
        <SideNav />
        <div className="main-page-container">
          <RouterPath />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
