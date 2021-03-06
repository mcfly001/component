import React from 'react';
import { RankList } from '@/index';

const data = Array.from(new Array(10)).map((_, idx) => ({
  label: `选项${idx + 1}`,
  value: 10 - idx,
}));

function RankListDemo() {
  return (
    <div>
      <RankList data={data}></RankList>
    </div>
  );
}

export default RankListDemo;
