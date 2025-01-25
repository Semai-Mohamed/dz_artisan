import toast from "react-hot-toast";

type ToastTypes = "success" | "error" | "info";

const ToastHandler = (
  type: ToastTypes,
  title: string,
  message: string | string[],
) => {
  const displayMessage =
    typeof message === "string" ? message : message[0] || "An error occurred";

  return toast({
    type: type,
    text1: title,
    text2: displayMessage,
  });
};

export default ToastHandler;