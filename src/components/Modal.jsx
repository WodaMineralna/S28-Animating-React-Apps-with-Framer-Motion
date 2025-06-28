import { createPortal } from "react-dom";
import { motion } from "motion/react";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        className="modal"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" // * starting animation, when the element is added to the DOM
        animate="visible" // animacja ktora ma byc odegrana kiedy nasz jakikolwiek state elementu sie zmieni (czyli w tym przypadku - kiedy element zostanie dodany do DOMu)
        exit="hidden"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
