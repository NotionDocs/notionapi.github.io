import { EffectCallback, useEffect } from "preact/hooks";

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export default useEffectOnce;
