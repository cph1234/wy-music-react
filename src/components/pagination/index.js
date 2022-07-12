import React, { memo } from 'react';

import { Pagination } from 'antd';
import { PaginationWrapper } from './style';

export default memo(function PHPagination(props) {
  const { currentPage, total, onPageChange, pageSize = 35 } = props;
  // console.log(total)
  // render function
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === 'next') {
      return <button className="control next">下一页 &gt;</button>;
    }
    return originalElement;
  }

  return (
    <PaginationWrapper>
      <Pagination className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange} />
    </PaginationWrapper>
  )
})
