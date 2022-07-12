import React, { memo } from 'react';
import PHRanking from '@/components/ranking';
import { shallowEqual, useSelector } from 'react-redux';

export default memo(function PHUpRanking() {
  const { upRanking } = useSelector(state => ({
    upRanking: state.get('ranking').get('upRanking'),
  }), shallowEqual)
  // console.log(upRanking);
  return (
    <div>
      <PHRanking info={upRanking}></PHRanking>
    </div>
  )
})
