import { useEffect, useState } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const close = () => setIsOpen(false);
    const closeWithEscape = (event) => { if (event.key === 'Escape') close(); };
    window.addEventListener('hashchange', close);
    window.addEventListener('keydown', closeWithEscape);
    return () => {
      window.removeEventListener('hashchange', close);
      window.removeEventListener('keydown', closeWithEscape);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  return { isOpen, toggle: () => setIsOpen((value) => !value), close: () => setIsOpen(false) };
}
