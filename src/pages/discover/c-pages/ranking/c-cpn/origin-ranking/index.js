import React, { memo } from 'react';
import PHRanking from '@/components/ranking';
import { shallowEqual, useSelector } from 'react-redux';

export default memo(function PHOriginRanking() {
  const { originRanking } = useSelector(state => ({
    originRanking: state.get('ranking').get('originRanking'),
  }), shallowEqual)
  // console.log(originRanking);
  return (
    <div>
      <PHRanking info={originRanking}></PHRanking>
    </div>
  )
})
