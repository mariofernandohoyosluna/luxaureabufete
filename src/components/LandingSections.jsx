import Arrow from './ui/Arrow';
import { IconEar, IconHeartHandshake, IconReceipt2, IconRoute, IconScale, IconShieldCheck, IconShieldLock, IconUsersGroup } from '@tabler/icons-react';
import { services, steps, whatsapp } from '../data/siteContent';

export function ClaritySection() {
  return <><section className="clarity layer-panel reveal-section"><div className="clarity-copy"><p className="section-kicker">Cuando lo importante está en juego</p><h2 data-split data-text-animation="sweep">La incertidumbre también necesita una estrategia.</h2><p>Un conflicto familiar, una acusación o una decisión patrimonial pueden alterar su tranquilidad de un momento a otro. Entender sus derechos y opciones es el primer paso para recuperar control y avanzar con certeza.</p></div><aside className="clarity-aside"><IconScale size={35} stroke={1.25} aria-hidden="true" /><p className="clarity-quote">“Necesito saber qué puedo hacer y qué debo proteger primero.”</p></aside></section><section className="consequence layer-panel reveal-section"><div className="consequence-copy"><p className="section-kicker">Actuar a tiempo cambia el camino</p><h2 data-split data-text-animation="resolve">Sin orientación, una decisión apresurada puede costar demasiado.</h2><p>Postergar una acción, firmar sin comprender sus consecuencias o enfrentar un proceso sin defensa puede aumentar los riesgos. Una asesoría oportuna permite ordenar los hechos, proteger sus derechos y tomar decisiones informadas.</p></div><ul className="consequence-list"><li><b>Tiempo</b><span>Atender el problema oportunamente puede evitar que la situación se complique.</span></li><li><b>Protección</b><span>Su familia, libertad y patrimonio requieren decisiones jurídicamente respaldadas.</span></li><li><b>Claridad</b><span>Conocer sus opciones permite avanzar con una estrategia definida.</span></li></ul></section></>;
}

export function PracticeAreas() {
  const areaIcons = [IconHeartHandshake, IconUsersGroup, IconReceipt2, IconShieldLock];
  return <section className="practice layer-panel reveal-section" id="servicios"><span className="practice-word" aria-hidden="true">AUREA</span><div className="section-heading"><p className="section-kicker">Áreas de práctica</p><h2 data-split data-text-animation="cascade">Una estrategia legal para su familia, libertad y patrimonio.</h2><p className="practice-intro">Cada situación recibe escucha, análisis y una ruta jurídica personalizada. Trabajamos para convertir la incertidumbre en decisiones claras y acciones concretas.</p></div><div className="practice-lines">{services.map((service, index) => { const AreaIcon = areaIcons[index]; return <a href={whatsapp} target="_blank" rel="noreferrer" className="practice-line" key={service.number} aria-label={`Solicitar orientación sobre ${service.title}`}><AreaIcon className="practice-icon" size={25} stroke={1.4} aria-hidden="true" /><h3>{service.title}</h3><div className="practice-copy"><p className="practice-summary">{service.description}</p><p className="practice-detail">{service.detail}</p><span className="practice-cta">Solicitar orientación privada</span></div><Arrow /></a>; })}</div></section>;
}

export function MethodSection() {
  const stepIcons = [IconEar, IconRoute, IconShieldCheck];
  return <section className="method-new layer-panel reveal-section" id="metodo"><div className="method-visual"><img src="/images/legal-guidance.png" alt="Abogado avanzando por un espacio iluminado que representa una ruta jurídica clara" /><div className="method-intro"><p className="section-kicker">Ley, estrategia y personas</p><h2 data-split data-text-animation="spread">El proceso comienza por entender su historia y lo que necesita proteger.</h2></div></div><div className="method-steps">{steps.map((step, index) => { const StepIcon = stepIcons[index]; return <article key={step.number}><StepIcon className="method-step-icon" size={29} stroke={1.45} aria-hidden="true" /><div><h3>{step.title}</h3><p>{step.description}</p></div></article>; })}</div></section>;
}

export function CareSection() {
  return <section className="care layer-panel reveal-section"><div className="care-image"><img src="/images/legal-consultation.png" alt="Abogada escuchando con atención a una cliente durante una consulta privada" /></div><div className="care-copy"><p className="section-kicker">Personas antes que expedientes</p><h2 data-split data-text-animation="unfold">No tiene que elegir entre firmeza y humanidad.</h2><p>Cada asunto legal involucra una historia, una familia o un futuro que merece ser protegido. Le acompañamos con lenguaje claro, estrategia cuidadosa y el respeto que su situación requiere.</p><a className="text-link" href="#contacto">Conozca el siguiente paso <Arrow /></a></div></section>;
}

export function ClosingStatement() {
  return <section className="closing-statement reveal-section"><p>Lo que sigue puede sentirse más claro.</p><a href="#contacto">Dar el primer paso <Arrow /></a></section>;
}
