export default function SectionRail({ number, label, light = false }) {
  return <div className={`rail ${light ? 'rail-light' : ''}`}><span>{number}</span><span>{label}</span></div>;
}
