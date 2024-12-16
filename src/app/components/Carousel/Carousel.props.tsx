import type { HTMLAttributes } from 'react';
import {EmblaOptionsType} from 'embla-carousel';
export default interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string[];
}