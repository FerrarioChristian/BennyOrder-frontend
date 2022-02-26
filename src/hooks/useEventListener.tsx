import { useEffect, useRef } from "react";

export function useEventListener(
  eventName: string,
  handler: (e: any) => void,
  element = document
) {
  const savedHandler: any = useRef(null);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: any) => {
      return savedHandler.current(event);
    };

    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
