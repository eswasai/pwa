// lib/toastService.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS once here

// Configure toast defaults
const toastConfig = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Toast functions
export const showToast = {
  success: (message, options = {}) => {
    toast.success(message, { ...toastConfig, ...options });
  },
  error: (message, options = {}) => {
    toast.error(message, { ...toastConfig, ...options });
  },
  info: (message, options = {}) => {
    toast.info(message, { ...toastConfig, ...options });
  },
  warn: (message, options = {}) => {
    toast.warn(message, { ...toastConfig, ...options });
  },
  default: (message, options = {}) => {
    toast(message, { ...toastConfig, ...options });
  },
};
