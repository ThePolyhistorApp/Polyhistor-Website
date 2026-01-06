"use client";

import WaitlistModal from "@/components/WaitlistModal";
import { useModal } from "@/context/ModalContext";
import { AnimatePresence } from "framer-motion";

export default function GlobalWaitlistWrapper() {
  const { isModalOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isModalOpen && <WaitlistModal onClose={closeModal} />}
    </AnimatePresence>
  );
}
