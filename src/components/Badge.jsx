import { motion } from "motion/react";

export default function Badge({ caption }) {
  return (
    <motion.span
      className="badge"
      key={caption}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.3 }}
    >
      {caption}
    </motion.span>
  );
}
