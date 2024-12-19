import Image from 'next/image';
import type { FC } from 'react';
import Props from './ArrowSocial.props';
import icon from "@/assets/arrowSocial.svg"

const ArrowSocial:FC<Props> = ({className, ...props}) => {
    return <Image alt='ArrowSocial' className={className} src={icon} {...props} />;
}

export default ArrowSocial;