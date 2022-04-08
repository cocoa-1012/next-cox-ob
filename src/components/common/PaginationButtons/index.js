import classNames from "classnames";
import React, { useEffect } from "react";
import { DEFAULT_PAGE_NUMBER } from "../../../config/constants";

const PaginationButtons = ({ onPageChange, currentPage, pages }) => {
  useEffect(() => {
    if (currentPage > pages) {
      onPageChange(pages);
    }
  }, [onPageChange, pages, currentPage]);

  /**
   * @name getButtons
   * @description Based on the currentPage and number of pages it sets up a
   * layout for pagination buttons.
   * Adding -1 in the allPages array means that ellipises will be shown as the label of the button
   * @returns Array of jsx buttons
   */
  const getButtons = () => {
    const previousPage = parseInt(currentPage) - 1;
    const nextPage = parseInt(currentPage) + 1;
    const allPages = [1];

    if (currentPage <= 2) {
      if (pages > 2) {
        allPages.push(2);
        allPages.push(3);
      } else {
        allPages.push(2);
      }
    } else if (currentPage <= 3) {
      allPages.push(previousPage);
      allPages.push(currentPage);
      allPages.push(nextPage);
    } else if (currentPage > 3) {
      allPages.push(-1);
      allPages.push(previousPage);
      allPages.push(currentPage);
      if (nextPage <= pages) {
        allPages.push(nextPage);
      }
    }

    if (nextPage < pages - 1) {
      allPages.push(-1);
    }

    if (currentPage !== pages && nextPage !== pages) {
      allPages.push(pages);
    }

    const buttons = [];
    allPages.forEach((page, index) => {
      if (page === -1) {
        buttons.push(
          <li className="page-item" key={index}>
            <button disabled className="page-link text-secondary">
              ...
            </button>
          </li>
        );
      } else {
        buttons.push(
          <li
            key={index}
            className={classNames("page-item", {
              active: currentPage === page,
            })}
          >
            <button
              onClick={() => onPageChange(page)}
              className="page-link text-secondary"
            >
              {page}
            </button>
          </li>
        );
      }
    });

    return buttons;
  };

  if (!pages || pages <= 1) {
    return null;
  }

  return (
    <div className="row justify-content-center align-items-center mt-5">
      <div className="col-auto my-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="btn btn-soft-primary btn-sm"
          disabled={currentPage === DEFAULT_PAGE_NUMBER}
          data-testid="prev-button"
        >
          Previous
        </button>
      </div>

      <div className="col-auto my-1">
        <nav>
          <ul className="pagination rounded mb-0">{getButtons()}</ul>
        </nav>
      </div>

      <div className="col-auto my-1">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="btn btn-soft-primary btn-sm"
          disabled={currentPage === pages}
          data-testid="next-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationButtons;
