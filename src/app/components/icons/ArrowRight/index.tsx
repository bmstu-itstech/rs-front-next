import type {FC} from 'react';
import Props from './ArrowRight.props';
import Image from 'next/image';
import icon from '@/assets/arrow-right.svg';

const ArrowRight: FC<Props> = ({className, ...props}) => {
  return (
    <Image src={icon} alt='right-arrow-icon' className={className} {...props} />
  );
};

export default ArrowRight;
