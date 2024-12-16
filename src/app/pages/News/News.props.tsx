import type {HTMLAttributes} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string[];
}
