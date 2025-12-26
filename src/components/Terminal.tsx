import { useRef, useEffect } from 'react';
import { useTerminal } from '../hooks/useTerminal';
import { CommandLine } from './CommandLine';
import { OutputLine } from './OutputLine';

interface TerminalProps {
  terminalRef?: React.RefObject<HTMLDivElement>;
}

export function Terminal({ terminalRef }: TerminalProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const ref = terminalRef || internalRef;

  const {
    output,
    currentInput,
    setCurrentInput,
    isPasswordMode,
    handleSubmit,
    handleHistoryUp,
    handleHistoryDown,
  } = useTerminal();

  // Auto-scroll to bottom when new output is added
  useEffect(() => {
    window.scrollTo(0, document.body.offsetHeight);
  }, [output]);

  return (
    <>
      <div id="terminal" ref={ref}>
        {output.map((line) => (
          <OutputLine
            key={line.id}
            content={line.content}
            className={line.className}
            noAnimation={line.noAnimation}
          />
        ))}
        <a id="before"></a>
      </div>
      <CommandLine
        value={currentInput}
        onChange={setCurrentInput}
        onSubmit={handleSubmit}
        onHistoryUp={handleHistoryUp}
        onHistoryDown={handleHistoryDown}
        isPasswordMode={isPasswordMode}
      />
    </>
  );
}
