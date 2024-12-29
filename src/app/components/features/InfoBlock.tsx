'use client';

import {memo, type ReactNode} from 'react';
import {Bold, Text} from '../shared';
import isMobile from '@/app/hooks/isMobile';

function InfoBlock({
  title = 'Title',
  children = null,
}: {
  title?: string;
  children?: ReactNode;
}) {
  const mobile = isMobile();

  return (
    <div className='max-w-[1600px] justify-center'>
      <div className={`${mobile ? 'mt-[100px]' : 'mt-[130px]'}`} />
      {mobile ? <Bold size={36}>{title}</Bold> : <Text size={82}>{title}</Text>}
      <div className='content'>{children}</div>
    </div>
  );
}

export default memo(InfoBlock);
