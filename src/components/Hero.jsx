import Arrow from './ui/Arrow';
import { whatsapp } from '../data/siteContent';

export default function Hero() {
  return <section className="hero layer-panel" id="inicio"><div className="hero-background" aria-hidden="true" style={{ backgroundImage: "url('/images/hero.jpg')" }} /><div className="hero-overlay" aria-hidden="true" /><div className="hero-copy-wrap"><p className="eyebrow">Derecho familiar · Atención privada</p><h1 data-split data-text-animation="rise">Decidir con firmeza.<br /><em>Cuidar lo que más importa.</em></h1><p className="hero-copy">En momentos familiares complejos, necesita más que respuestas rápidas. Necesita una estrategia clara, trato humano y defensa rigurosa.</p><div className="hero-actions"><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Agendar conversación privada <Arrow /></a><a className="text-link" href="#servicios">Conocer cómo podemos ayudar</a></div></div><p className="hero-trust">Confidencialidad <i /> Estrategia <i /> Acompañamiento</p></section>;
}
