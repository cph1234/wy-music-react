import React, { memo } from 'react';
import PHRanking from '@/components/ranking';
import { shallowEqual, useSelector } from 'react-redux';

export default memo(function PHNewRanking() {
  const { newRanking } = useSelector(state => ({
    newRanking: state.get('ranking').get('newRanking'),
  }), shallowEqual)
  // console.log(newRanking);
  return (
    <div>
      <PHRanking info={newRanking}></PHRanking>
    </div>
  )
})
