import { INews } from '@/app/types';
import type { HTMLAttributes } from 'react';
export default interface Props extends HTMLAttributes<HTMLDivElement> {
  items: INews[];
}