import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseIntersectionObserverOption {
    callback: () => void;
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
}

export const useThrottle = ({
    wrapperRef,
    triggerRef,
    callback,
}: UseIntersectionObserverOption) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const targetElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.current.observe(targetElement);
        }
        return () => {
            if (observer.current && targetElement) {
                observer.current.unobserve(targetElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
