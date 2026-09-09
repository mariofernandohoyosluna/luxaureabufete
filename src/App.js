import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CareSection, ClaritySection, MethodSection, PracticeAreas } from './components/LandingSections';
import { useGsapScroll } from './hooks/useGsapScroll';
import './App.css';

function App() {
  const { root } = useGsapScroll();
  return <div className="site-shell" ref={root}><div className="scroll-progress" /><Header /><main><Hero /><ClaritySection /><PracticeAreas /><CareSection /><MethodSection /><Contact /></main><Footer /></div>;
}

export default App;
