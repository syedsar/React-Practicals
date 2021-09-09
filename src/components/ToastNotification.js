import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// custom component is toast msg
const Custom = ({closeToast})=>{
    return (
        <div>
            something went worng
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

// toast.configure() : present in root (App) component
function ToastNotification() {
  const notify = () => {
    toast("Basic Notification", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success Notification", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Info Notification", { position: toast.POSITION.TOP_RIGHT });
    toast.warn("Warning Notification", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });
    toast.error("Error Notification", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast(<Custom />, { position: toast.POSITION.BOTTOM_RIGHT, autoClose : false});
  };
  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default ToastNotification;
