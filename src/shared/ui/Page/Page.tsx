import { MutableRefObject, ReactNode, memo, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    onScrollEnd: () => void;
    children: ReactNode;
}

export const Page = memo((props: PageProps) => {
    const { children, onScrollEnd, className } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useThrottle({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    return (
        <section
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
