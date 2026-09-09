import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function useMobileMenuAnimation(isOpen) {
  const menuRef = useRef(null);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return undefined;

    const links = menu.querySelectorAll('.mobile-menu-link');
    const details = menu.querySelectorAll('.mobile-menu-meta, .mobile-menu-mark');
    const reducedMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      gsap.set(menu, { autoAlpha: isOpen ? 1 : 0, clipPath: isOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)', pointerEvents: isOpen ? 'auto' : 'none' });
      return undefined;
    }

    const timeline = gsap.timeline({ defaults: { overwrite: true } });
    if (isOpen) {
      timeline
        .set(menu, { visibility: 'visible', pointerEvents: 'auto' })
        .fromTo(menu, { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)' }, { autoAlpha: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power4.inOut' })
        .fromTo(links, { yPercent: 110, rotate: 3, autoAlpha: 0 }, { yPercent: 0, rotate: 0, autoAlpha: 1, duration: 0.65, stagger: 0.08, ease: 'power3.out' }, '-=0.3')
        .fromTo(details, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out' }, '-=0.3');
    } else {
      timeline
        .to([...links].reverse(), { yPercent: -45, autoAlpha: 0, duration: 0.24, stagger: 0.035, ease: 'power2.in' })
        .to(menu, { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)', duration: 0.48, ease: 'power3.inOut' }, '-=0.08')
        .set(menu, { visibility: 'hidden', pointerEvents: 'none' });
    }

    return () => timeline.kill();
  }, [isOpen]);

  return menuRef;
}
