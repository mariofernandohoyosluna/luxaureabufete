import Arrow from './ui/Arrow';
import { whatsapp } from '../data/siteContent';

export default function Hero() {
  return <section className="hero layer-panel" id="inicio"><div className="hero-background" aria-hidden="true" style={{ backgroundImage: "url('/images/hero-legal-strategy.png')" }} /><div className="hero-overlay" aria-hidden="true" /><div className="hero-copy-wrap"><p className="eyebrow">Ley · Estrategia · Personas</p><h1 data-split data-text-animation="rise">Asesoría legal para proteger.<br /><em>Familia, libertad y patrimonio.</em></h1><p className="hero-copy">Cuando su familia, su libertad o su patrimonio están en juego —especialmente ante una detención o investigación penal— necesita una estrategia legal clara, atención humana y defensa rigurosa.</p><div className="hero-actions"><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Agendar asesoría privada <Arrow /></a><a className="text-link" href="#servicios">Conocer cómo podemos ayudar</a></div></div><p className="hero-trust">Confidencialidad <i /> Estrategia <i /> Trato humano</p></section>;
}
