import { useEffect } from 'react';

const useBodyLock = (isLocked: boolean) => {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        const scrollBarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        if (isLocked) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = originalStyle;
            document.body.style.paddingRight = originalPaddingRight;
        }
        return () => {
            document.body.style.overflow = originalStyle;
            document.body.style.paddingRight = originalPaddingRight;
        };
    }, [isLocked]);
};

export default useBodyLock;
