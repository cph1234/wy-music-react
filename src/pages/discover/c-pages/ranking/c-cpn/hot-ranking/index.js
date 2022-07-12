import React, { memo } from 'react';
import PHRanking from '@/components/ranking';
import { shallowEqual, useSelector } from 'react-redux';

export default memo(function PHTopRanking() {
  const { hotRanking } = useSelector(state => ({
    hotRanking: state.get('ranking').get('hotRanking'),
  }), shallowEqual)
  // console.log(hotRanking);
  return (
    <div>
      <PHRanking info={hotRanking}></PHRanking>
    </div>
  )
})
