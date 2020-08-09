import { useEffect } from "preact/hooks";

import useRafState from "./useRafState";

export const isClient = typeof window === "object";

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useRafState<{ width: number; height: number }>({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  });

  useEffect((): (() => void) | void => {
    if (isClient) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handler);

      return () => {
        window.removeEventListener("resize", handler);
      };
    }
  }, []);

  return state;
};

export default useWindowSize;
