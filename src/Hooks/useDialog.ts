import { useRef, useState } from "react";
export interface showMessageArguments {
  message: string;
  duration?: number;
}
interface dialogReturnTypes {
  message: string | null;
  showMessage: ({ message, duration }: showMessageArguments) => void;
}
const useDialog = (): dialogReturnTypes => {
  const [message, setMessage] = useState<string | null>(null);
  const timeOutRef = useRef<number | null>(null);

  const showMessage = ({
    message = "example message",
    duration = 2000, // if not provided set it to default state
  }: showMessageArguments): void => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    } // clear any prev timout

    setMessage((prev) => {
      if (prev) {
        requestAnimationFrame(() => setMessage(message));
        return null;
      }
      return message;
    });

    timeOutRef.current = window.setTimeout(() => setMessage(null), duration);
  };

  return { message, showMessage };
};

export default useDialog;
