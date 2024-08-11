import { useEffect } from "react";
import toast from "react-hot-toast";

const Error = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);

  return null; 
};

export default Error;
