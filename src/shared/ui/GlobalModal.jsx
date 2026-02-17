import { AnimatePresence, motion } from 'framer-motion';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import React from 'react';
import Modal from 'react-modal';

import { useModalStore } from 'shared/store';

Modal.setAppElement('#root');

// scrollDisabled: если false — разрешить скролл modal-content, если true — блокировать скролл всей страницы
export const GlobalModal = ({ scrollDisabled = true } = {}) => {
  const { isOpen, content, closeModal } = useModalStore();

  const $scrollableElement = document.querySelector('.my-scrollable-element');

  React.useEffect(() => {
    if (isOpen) {
      disablePageScroll($scrollableElement);
    } else {
      enablePageScroll($scrollableElement);
    }
    return () => {
      enablePageScroll($scrollableElement);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          overlayClassName="fixed inset-0 z-50 flex items-center justify-center p-4"
          className="flex min-h-screen min-w-full items-center justify-center border-none bg-transparent shadow-none outline-none"
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{ overlay: { background: 'transparent' } }}
        >
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              className="pointer-events-auto absolute inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto relative z-50 max-h-full min-w-[300px] max-w-full"
            >
              <div className="scroll-container relative max-h-dvh overflow-y-auto overflow-x-hidden bg-white">
                <button
                  className="absolute right-[16px] top-[24px] z-50 lg:right-[48px] lg:top-[48px]"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="12" fill="#212333" />
                    <path
                      d="M26.75 13.25L13.25 26.75"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.75 26.75L13.25 13.25"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {content}
              </div>
            </motion.div>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
};
