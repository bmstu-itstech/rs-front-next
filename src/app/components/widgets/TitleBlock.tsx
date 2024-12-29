'use client';
import {memo} from 'react';
import {Bold, Button, Text} from '../shared';
import isMobile from '@/app/hooks/isMobile';
import {motion} from 'framer-motion';

function TitleBlock() {
  const mobile = isMobile();

  const titleVariants = {
    hidden: {opacity: 0, y: -50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: 'easeOut'}},
  };

  const textVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: 'easeOut', delay: 0.2},
    },
  };

  const buttonVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: 'easeOut', delay: 0.4},
    },
  };

  return (
    <motion.div
      className={`grid justify-center ${
        mobile ? 'pt-[130px]' : 'pt-[200px]'
      } select-none text-center md:text-left`}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}>
      <motion.div variants={titleVariants}>
        {mobile ? (
          <Bold size={30}>ЦЕНТР МОЛОДЁЖНОЙ РОБОТОТЕХНИКИ</Bold>
        ) : (
          <Text size={90}>ЦЕНТР МОЛОДЁЖНОЙ РОБОТОТЕХНИКИ</Text>
        )}
      </motion.div>
      <motion.div variants={textVariants}>
        <Text size={mobile ? 17 : 30} className='max-w-[990px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </motion.div>
      <motion.div className='py-[10px] mt-[12px]' variants={buttonVariants}>
        <Button>ПОДРОБНЕЕ</Button>
      </motion.div>
    </motion.div>
  );
}

export default memo(TitleBlock);
