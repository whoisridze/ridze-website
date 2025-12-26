import { useRef } from 'react';
import { Terminal } from './components/Terminal';
import { useTitleGlitch } from './hooks/useTitleGlitch';
import { useGlitchEffects } from './hooks/useGlitchEffects';

function App() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useTitleGlitch();
  useGlitchEffects(terminalRef);

  return <Terminal terminalRef={terminalRef} />;
}

export default App;
