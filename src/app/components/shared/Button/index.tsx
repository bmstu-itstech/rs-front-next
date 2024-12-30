"use client";

import { memo } from "react";
import { Text } from "../Typography";
import { isMobile } from "../../hooks";
import { motion } from "framer-motion";

function Button({ children }: { children?: any }) {
  const mobile = isMobile();

  return (
    <motion.div
      className="px-[30px] min-w-[360px] py-[10px] rounded-[60px] border-[3px] border-[#C13100] cursor-pointer w-fit text-center hover:bg-[#C13100] transition-colors duration-300"
      whileHover={{
        scale: 1.05,
        backgroundColor: "#C13100",
        color: "white",
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.1,
          ease: "easeInOut",
        },
      }}
    >
      <Text size={mobile ? 19 : 30}>{children}</Text>
    </motion.div>
  );
}

export default memo(Button);