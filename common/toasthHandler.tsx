import { toast } from "react-hot-toast";
type ToastTypes = "success" | "error" | "info";

const ToastHandler = (
  type: ToastTypes,
  message: string | string[],
) => {
  const displayMessage =
    typeof message === "string" ? message : message[0] || "An error occurred";
    switch (type) {
    case "success":
      toast.success(displayMessage);
      break;
    case "error":
        toast.error(displayMessage);
        break;
    case "info":
        toast.loading(displayMessage);
        break;
    default:
    }
};

export default ToastHandler;