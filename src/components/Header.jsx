import Arrow from './ui/Arrow';
import { IconMenu2, IconMessageCircle, IconX } from '@tabler/icons-react';
import { whatsapp } from '../data/siteContent';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { useMobileMenuAnimation } from '../hooks/useMobileMenuAnimation';

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const menuRef = useMobileMenuAnimation(isOpen);
  const menuTabIndex = isOpen ? 0 : -1;
  return <header className={`site-header${isOpen ? ' menu-open' : ''}`}>
    <a className="brand" href="#inicio" aria-label="Lux Aurea Bufete Legal">
      <img className="brand-emblem" src="/images/brand/lux-aurea-logo.svg" alt="" />
      <span className="brand-copy"><strong>Lux<br />Aurea</strong></span>
    </a>
    <nav className="desktop-nav"><a href="#servicios">Áreas de práctica</a><a href="#metodo">Nuestro enfoque</a><a href="#contacto">Contacto</a></nav>
    <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer"><IconMessageCircle size={17} stroke={1.7} /><span>Consulta privada</span><Arrow /></a>
    <button className="menu-button" onClick={toggle} aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isOpen}>{isOpen ? <IconX size={23} stroke={1.7} /> : <IconMenu2 size={24} stroke={1.7} />}</button>
    <nav className={`mobile-nav${isOpen ? ' is-open' : ''}`} ref={menuRef} aria-hidden={!isOpen} aria-label="Navegación móvil">
      <div className="mobile-menu-links">
        <a className="mobile-menu-link" href="#inicio" onClick={close} tabIndex={menuTabIndex}><span>Inicio</span><Arrow /></a>
        <a className="mobile-menu-link" href="#servicios" onClick={close} tabIndex={menuTabIndex}><span>Áreas de práctica</span><Arrow /></a>
        <a className="mobile-menu-link" href="#metodo" onClick={close} tabIndex={menuTabIndex}><span>Nuestro enfoque</span><Arrow /></a>
        <a className="mobile-menu-link" href="#contacto" onClick={close} tabIndex={menuTabIndex}><span>Contacto</span><Arrow /></a>
      </div>
      <a className="mobile-menu-cta mobile-menu-link" href={whatsapp} onClick={close} target="_blank" rel="noreferrer" tabIndex={menuTabIndex}><IconMessageCircle size={20} stroke={1.6} /><span>Consulta privada</span><Arrow /></a>
      <div className="mobile-menu-mark" aria-hidden="true"><img src="/images/brand/lux-aurea-logo.svg" alt="" /></div>
    </nav>
  </header>;
}
