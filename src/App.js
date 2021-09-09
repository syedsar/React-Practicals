import { toast } from "react-toastify";
import "./App.css";
import CreditCard from "./components/CreditCard";
import ModalReact from "./components/Modal";
import ReactCountup from "./components/ReactCountup";
import ReactIcons from "./components/ReactIcons";
import ReactIdleTimmer from "./components/ReactIdleTimmer";
import ReactTippyComponent from "./components/ReactTippyComponent";
import ToastNotification from "./components/ToastNotification";

toast.configure();

function App() {
  return (
    <div className="App">
      {/* <ReactIcons />
      <ToastNotification />
      <ModalReact />
      <ReactTippyComponent />
      <ReactCountup />
      <ReactIdleTimmer /> */}
      <CreditCard />
    </div>
  );
}

export default App;
