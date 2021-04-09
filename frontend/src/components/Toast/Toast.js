import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast({ message }) {
  const notify = () => toast(message);
  notify();

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
