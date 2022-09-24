import { useEffect, useState } from 'react';

export default function usePagination<T>({
  items,
  countPerPage = 5,
}: {
  /**
   * All the items that need to be paginated.
   */
  items: T[];
  /**
   * The number of items per page.
   */
  countPerPage?: number;
}): {
  /**
   * Go to the next page.
   */
  next: () => void;
  /**
   * Go to the previous page.
   */
  back: () => void;
  /**
   * Manually set the page.
   */
  setCurrentPage: (page: number) => void;
  /**
   * The current page.
   */
  currentPage: number;
  /**
   * The total number of pages.
   */
  totalPages: number;
  /**
   * The items in the current page.
   */
  currentItems: T[];
  /**
   * True if on the first page.
   */
  isFirstPage: boolean;
  /**
   * True if on the last page.
   */
  isLastPage: boolean;
} {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<T[]>([]);
  const totalPages = Math.ceil(items.length / countPerPage);

  // Calculates the current page items.
  // Recalculates whenever the number of items changes or
  // when the current page changes.
  useEffect(() => {
    const currentPageLastItemIndex = currentPage * countPerPage;
    const currentPageFirstItemIndex = currentPageLastItemIndex - countPerPage;
    const range = items.slice(
      currentPageFirstItemIndex,
      currentPageLastItemIndex,
    );
    setCurrentItems(range);
  }, [currentPage, items, countPerPage]);

  // If for some reason the current page is higher than the
  // total pages available, set the current page as the last
  // page.
  // This only happens when the number of items changes drastically.
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage((val) => val + 1);
    }
  };

  const back = () => {
    if (currentPage > 1) {
      setCurrentPage((val) => val - 1);
    }
  };

  return {
    next,
    back,
    setCurrentPage,
    currentPage,
    totalPages,
    currentItems,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
  };
}
