import { useCallback, useRef } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(
    callback: T,
    delay: number,
) {
    const timer = useRef<number | null>(null);

    const debouncedCallback = useCallback(
        (...args: Parameters<T>) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = window.setTimeout(() => {
                callback(...args);
                timer.current = null;
            }, delay);
        },
        [callback, delay],
    );

    return debouncedCallback;
}
