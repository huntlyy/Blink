import { useState, useCallback } from 'react';

interface ShowMoreResult {
    visibleItems: any[];
    hasMore: boolean;
    showMore: () => void;
    reset: () => void;
    canHide: boolean;
}

const useShowMore = (
    array: any[],
    increment: number = 15,
    initShowItems: number = 5,
): ShowMoreResult => {
    const [visibleCount, setVisibleCount] = useState(initShowItems);

    const visibleItems = array.slice(0, visibleCount);

    const hasMore = array.length > visibleCount;

    const canHide = visibleCount > initShowItems;

    const showMore = useCallback(() => {
        setVisibleCount((prevCount) =>
            Math.min(prevCount + increment, array.length),
        );
    }, [array.length, increment]);

    const reset = useCallback(() => {
        setVisibleCount(initShowItems);
    }, [initShowItems]);

    return {
        visibleItems,
        hasMore,
        showMore,
        reset,
        canHide,
    };
};

export default useShowMore;
