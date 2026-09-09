import Arrow from './ui/Arrow';
import { IconEar, IconHeartHandshake, IconReceipt2, IconRoute, IconScale, IconShieldCheck, IconShieldLock, IconUsersGroup } from '@tabler/icons-react';
import { services, steps, whatsapp } from '../data/siteContent';

export function ClaritySection() {
  return <><section className="clarity layer-panel reveal-section"><div className="clarity-copy"><p className="section-kicker">Cuando una familia atraviesa una ruptura</p><h2 data-split data-text-animation="sweep">La incertidumbre ocupa todos los espacios.</h2><p>Las decisiones sobre una separación, la convivencia, los recursos económicos o la seguridad rara vez llegan en un momento sencillo. A menudo traen preguntas que pesan demasiado para enfrentar a solas.</p></div><aside className="clarity-aside"><IconScale size={35} stroke={1.25} aria-hidden="true" /><p className="clarity-quote">“¿Qué sigue para mí y para quienes dependen de mí?”</p></aside></section><section className="consequence layer-panel reveal-section"><div className="consequence-copy"><p className="section-kicker">Postergar también es una decisión</p><h2 data-split data-text-animation="resolve">Sin orientación, la preocupación se convierte en desgaste.</h2><p>La falta de acuerdos claros puede profundizar tensiones, afectar la estabilidad de sus hijas e hijos y dejar expuestos aspectos que merecen protección. No se trata de escalar un conflicto: se trata de llegar preparado a cada conversación y cada decisión.</p></div><ul className="consequence-list"><li><b>Tiempo</b><span>Las decisiones sin ruta pueden extender la incertidumbre.</span></li><li><b>Protección</b><span>Lo importante necesita atención antes de que la urgencia lo defina.</span></li><li><b>Claridad</b><span>Conocer sus opciones devuelve capacidad de decisión.</span></li></ul></section></>;
}

export function PracticeAreas() {
  const areaIcons = [IconHeartHandshake, IconUsersGroup, IconReceipt2, IconShieldLock];
  return <section className="practice layer-panel reveal-section" id="servicios"><span className="practice-word" aria-hidden="true">AUREA</span><div className="section-heading"><p className="section-kicker">Áreas de práctica</p><h2 data-split data-text-animation="cascade">Una ruta legal diseñada para proteger su siguiente capítulo.</h2><p className="practice-intro">Convertimos situaciones complejas en decisiones informadas. Cada asunto recibe escucha, análisis y una estrategia acorde con lo que usted necesita preservar.</p></div><div className="practice-lines">{services.map((service, index) => { const AreaIcon = areaIcons[index]; return <a href={whatsapp} target="_blank" rel="noreferrer" className="practice-line" key={service.number} aria-label={`Solicitar orientación sobre ${service.title}`}><AreaIcon className="practice-icon" size={25} stroke={1.4} aria-hidden="true" /><h3>{service.title}</h3><div className="practice-copy"><p className="practice-summary">{service.description}</p><p className="practice-detail">{service.detail}</p><span className="practice-cta">Solicitar orientación privada</span></div><Arrow /></a>; })}</div></section>;
}

export function MethodSection() {
  const stepIcons = [IconEar, IconRoute, IconShieldCheck];
  return <section className="method-new layer-panel reveal-section" id="metodo"><div className="method-visual"><img src="/images/guidance.jpg" alt="Pasillo iluminado que representa una ruta clara" /><div className="method-intro"><p className="section-kicker">Una atención que devuelve perspectiva</p><h2 data-split data-text-animation="spread">El proceso empieza por entender lo que necesita proteger.</h2></div></div><div className="method-steps">{steps.map((step, index) => { const StepIcon = stepIcons[index]; return <article key={step.number}><StepIcon className="method-step-icon" size={29} stroke={1.45} aria-hidden="true" /><div><h3>{step.title}</h3><p>{step.description}</p></div></article>; })}</div></section>;
}

export function CareSection() {
  return <section className="care layer-panel reveal-section"><div className="care-image"><img src="/images/family-protection.jpg" alt="Manos de una familia en un momento de conversación y cuidado" /></div><div className="care-copy"><p className="section-kicker">Protección con sensibilidad</p><h2 data-split data-text-animation="unfold">No tiene que elegir entre firmeza y humanidad.</h2><p>La materia familiar exige una representación que comprenda lo que está en juego. Le acompañamos con lenguaje claro, estrategia cuidadosa y el respeto que su historia merece.</p><a className="text-link" href="#contacto">Conozca el siguiente paso <Arrow /></a></div></section>;
}

export function ClosingStatement() {
  return <section className="closing-statement reveal-section"><p>Lo que sigue puede sentirse más claro.</p><a href="#contacto">Dar el primer paso <Arrow /></a></section>;
}
