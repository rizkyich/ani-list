/** @jsxImportSource @emotion/react */
import { BsDot } from 'react-icons/bs';

import { usePagination, DOTS } from '../../hooks/usePagination';
import { mq } from '../../helpers/mediaQueries';

import {
  pagination,
  paginationContainer,
  paginationItem,
  dots,
  disabled,
  arrow,
  arrowLeft,
  arrowRight,
  selected,
  disabledArrow
} from './styles';

const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div css={pagination}>
      <ul css={paginationContainer}>
        <li
          css={mq({
            ...paginationItem,
            ...(currentPage === 1 && { ...disabled, ...disabledArrow }),
            padding: ['0px 10px', '0px 10px', '0px 15px']
          })}
          onClick={onPrevious}>
          <div css={{ ...arrow, ...arrowLeft }} />
        </li>
        {paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={idx}
                css={mq({
                  ...paginationItem,
                  ...dots,
                  padding: ['0px 10px', '0px 10px', '0px 15px']
                })}>
                <BsDot />
              </li>
            );
          }

          return (
            <li
              key={idx}
              css={mq({
                ...paginationItem,
                ...(currentPage === pageNumber && selected),
                padding: ['0px 10px', '0px 10px', '0px 15px']
              })}
              onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </li>
          );
        })}
        <li
          css={mq({
            ...paginationItem,
            ...(currentPage === lastPage && { ...disabled, ...disabledArrow }),
            padding: ['0px 10px', '0px 10px', '0px 15px']
          })}
          onClick={onNext}>
          <div css={{ ...arrow, ...arrowRight }} />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
