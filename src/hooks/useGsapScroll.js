import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrambleTextPlugin } from 'gsap/dist/ScrambleTextPlugin';

export function useGsapScroll() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope || typeof window.matchMedia !== 'function') return undefined;

    gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);
    const splits = [];
    const listeners = [];
    let media;

    const context = gsap.context(() => {
      const progress = scope.querySelector('.scroll-progress');
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (progress) gsap.set(progress, { scaleX: 1 });
        return;
      }

      scope.querySelectorAll('[data-split]').forEach((heading) => {
        const animationName = heading.dataset.textAnimation || 'rise';
        const section = heading.closest('.layer-panel') || heading;
        const isContactHeading = section.classList.contains('contact');
        const headingVariants = {
          rise: { from: { yPercent: 105, rotate: 2, autoAlpha: 0 }, to: { yPercent: 0, rotate: 0, autoAlpha: 1 } },
          sweep: { from: { xPercent: -75, autoAlpha: 0 }, to: { xPercent: 0, autoAlpha: 1 } },
          cascade: { from: { yPercent: 65, rotateX: -55, autoAlpha: 0 }, to: { yPercent: 0, rotateX: 0, autoAlpha: 1 } },
          unfold: { from: { scaleY: 0.45, transformOrigin: 'top', autoAlpha: 0 }, to: { scaleY: 1, autoAlpha: 1 } },
          spread: { from: { scale: 0.78, letterSpacing: '0.12em', autoAlpha: 0 }, to: { scale: 1, letterSpacing: '0em', autoAlpha: 1 } },
          resolve: { from: { yPercent: 42, filter: 'blur(10px)', autoAlpha: 0 }, to: { yPercent: 0, filter: 'blur(0px)', autoAlpha: 1 } },
        };
        const variant = headingVariants[animationName];
        const split = SplitText.create(heading, {
          type: 'lines,words',
          mask: 'lines',
          aria: 'auto',
          autoSplit: true,
          onSplit: (instance) => gsap.fromTo(instance.words,
            variant.from,
            {
              ...variant.to,
              duration: 0.8,
              stagger: 0.04,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 76%',
                end: 'bottom top',
                toggleActions: isContactHeading ? 'play none play reverse' : 'play reverse play reverse',
              },
            }),
        });
        splits.push(split);
      });

      const textFlows = [
        { trigger: '.hero', selector: '.hero-copy-wrap > :not([data-split]), .hero-trust', from: { y: 28, autoAlpha: 0, filter: 'blur(5px)' } },
        { trigger: '.clarity', selector: '.clarity-copy > p, .clarity-aside', from: { x: -32, autoAlpha: 0 } },
        { trigger: '.consequence', selector: '.consequence-copy > p, .consequence-list li', from: { y: 24, autoAlpha: 0, filter: 'blur(5px)' } },
        { trigger: '.practice', selector: '.practice-intro, .practice-line h3, .practice-line p', from: { y: 20, autoAlpha: 0, scale: 0.96 } },
        { trigger: '.care', selector: '.care-copy > p, .care-copy .text-link', from: { x: 36, rotate: 2, autoAlpha: 0 } },
        { trigger: '.method-new', selector: '.method-steps h3, .method-steps p', from: { x: 28, autoAlpha: 0 } },
        { trigger: '.contact', selector: '.contact-intro > p', from: { y: 18, autoAlpha: 0, filter: 'blur(7px)' } },
      ];
      textFlows.forEach(({ trigger, selector, from }) => {
        const elements = scope.querySelectorAll(selector);
        if (!elements.length) return;
        gsap.fromTo(elements,
          from,
          {
            y: 0,
            x: 0,
            rotate: 0,
            scale: 1,
            autoAlpha: 1,
            filter: 'blur(0px)',
            duration: 0.62,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger,
              start: 'top 76%',
              end: 'bottom top',
              toggleActions: trigger === '.contact' ? 'play none play reverse' : 'play reverse play reverse',
            },
          });
      });

      scope.querySelectorAll('.eyebrow, .section-kicker, .panel-index span').forEach((element) => {
        const original = element.textContent;
        ScrollTrigger.create({
          trigger: element,
          start: 'top 88%',
          once: true,
          onEnter: () => gsap.to(element, { duration: 0.55, scrambleText: { text: original, chars: 'upperCase', speed: 0.35 } }),
        });
      });

      if (progress) ScrollTrigger.create({ trigger: scope, start: 'top top', end: 'bottom bottom', onUpdate: (self) => gsap.set(progress, { scaleX: self.progress }) });
      ScrollTrigger.create({ trigger: scope, start: '80px top', toggleClass: { targets: '.site-header', className: 'is-scrolled' } });
      ScrollTrigger.create({ trigger: '.contact', start: 'top 80px', end: 'bottom top', toggleClass: { targets: '.site-header', className: 'over-contact' } });
      gsap.to('.method-visual img', { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.method-new', start: 'top bottom', end: 'bottom top', scrub: true } });

      scope.querySelectorAll('.practice-line, .channels a').forEach((item) => {
        const arrow = item.querySelector('.arrow');
        const enter = () => {
          gsap.to(item, { paddingLeft: 14, duration: 0.25, ease: 'power2.out', overwrite: true });
          gsap.to(arrow, { x: 7, duration: 0.25, ease: 'power2.out', overwrite: true });
        };
        const leave = () => {
          gsap.to(item, { paddingLeft: 0, duration: 0.25, ease: 'power2.out', overwrite: true });
          gsap.to(arrow, { x: 0, duration: 0.25, ease: 'power2.out', overwrite: true });
        };
        const focus = enter;
        const blur = leave;
        item.addEventListener('mouseenter', enter); item.addEventListener('mouseleave', leave);
        item.addEventListener('focus', focus); item.addEventListener('blur', blur);
        listeners.push(() => { item.removeEventListener('mouseenter', enter); item.removeEventListener('mouseleave', leave); item.removeEventListener('focus', focus); item.removeEventListener('blur', blur); });
      });

      scope.querySelectorAll('.button, .header-cta, .text-link, .mobile-nav a, .menu-button').forEach((control) => {
        const arrow = control.querySelector('.arrow');
        const isMenu = control.classList.contains('menu-button');
        const activate = () => {
          gsap.to(control, { y: -2, scale: 1.015, duration: 0.24, ease: 'power2.out', overwrite: true });
          if (arrow) gsap.to(arrow, { x: 5, y: -1, duration: 0.24, ease: 'power2.out', overwrite: true });
          if (isMenu) gsap.to(control.querySelector('svg'), { rotate: 8, duration: 0.24, ease: 'power2.out', overwrite: true });
        };
        const deactivate = () => {
          gsap.to(control, { y: 0, scale: 1, duration: 0.3, ease: 'power3.out', overwrite: true });
          if (arrow) gsap.to(arrow, { x: 0, y: 0, duration: 0.3, ease: 'power3.out', overwrite: true });
          if (isMenu) gsap.to(control.querySelector('svg'), { rotate: 0, duration: 0.3, ease: 'power3.out', overwrite: true });
        };
        control.addEventListener('mouseenter', activate); control.addEventListener('mouseleave', deactivate);
        control.addEventListener('focus', activate); control.addEventListener('blur', deactivate);
        listeners.push(() => { control.removeEventListener('mouseenter', activate); control.removeEventListener('mouseleave', deactivate); control.removeEventListener('focus', activate); control.removeEventListener('blur', deactivate); });
      });

      media = gsap.matchMedia();
      media.add('(min-width: 821px)', () => {
        const panels = gsap.utils.toArray('.layer-panel');
        gsap.set(panels, { zIndex: (index) => index + 1 });
        panels.forEach((panel, index) => {
          if (index < panels.length - 1) ScrollTrigger.create({ trigger: panel, start: 'top top', end: 'bottom top', pin: true, pinSpacing: false, anticipatePin: 1 });
          if (index > 0 && !panel.classList.contains('contact')) gsap.fromTo(panel, { clipPath: 'inset(10% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', ease: 'none', scrollTrigger: { trigger: panel, start: 'top bottom', end: 'top top', scrub: true } });
        });
        ScrollTrigger.batch('.practice-line', { start: 'top 84%', once: true, onEnter: (items) => gsap.from(items, { x: -30, opacity: 0, duration: 0.55, stagger: 0.08, ease: 'power2.out' }) });
        gsap.fromTo('.method-steps article', { x: 34, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: 0.16, ease: 'power2.out', scrollTrigger: { trigger: '.method-new', start: 'top 72%', end: 'bottom top', toggleActions: 'play reverse play reverse' } });
        gsap.fromTo('.channels a', { x: 28, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.contact', start: 'top 76%', end: 'bottom top', toggleActions: 'play none play reverse' } });
      });

      media.add('(max-width: 820px)', () => {
        ScrollTrigger.batch('.practice-line, .method-steps article, .channels a', { start: 'top 88%', once: true, onEnter: (items) => gsap.from(items, { y: 24, opacity: 0, stagger: 0.08, duration: 0.55, ease: 'power2.out', overwrite: true }) });
      });
    }, scope);

    return () => { listeners.forEach((remove) => remove()); splits.forEach((split) => split.revert()); media?.revert(); context.revert(); };
  }, []);

  return { root };
}
