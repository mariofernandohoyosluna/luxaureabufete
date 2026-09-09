import Arrow from './ui/Arrow';
import SectionRail from './ui/SectionRail';
import { services, whatsapp } from '../data/siteContent';

export default function Services() {
  return <section className="services" id="servicios"><div className="section-intro"><SectionRail number="03" label="La solución" /><div><p className="overline">Lux Aurea Bufete Legal</p><h2>Una ruta legal diseñada para proteger su siguiente capítulo.</h2></div><p>Convertimos situaciones complejas en decisiones informadas. Cada asunto recibe escucha, análisis y una estrategia acorde con lo que usted necesita preservar.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="card-top"><span>{service.number}</span><span>◈</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="detail">＋ {service.detail}</div><a href={whatsapp} target="_blank" rel="noreferrer">Solicitar orientación privada <Arrow /></a></article>)}</div></section>;
}
