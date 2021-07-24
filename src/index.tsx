import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

type Fn = (...args: any[]) => any;

interface EventCallbackHook {
  <F extends Fn>(fn: F): (...args: Parameters<F>) => ReturnType<F>;
}

const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export const useEventCallback: EventCallbackHook = <F extends Fn>(fn: F) => {
  const callbackRef = useRef(fn);

  useEnhancedEffect(() => {
    callbackRef.current = fn;
  });

  return useCallback((...args: Parameters<F>) => callbackRef.current(...(args as any)), []);
};

export default useEventCallback;
